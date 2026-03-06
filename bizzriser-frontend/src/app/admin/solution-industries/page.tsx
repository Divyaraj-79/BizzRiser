"use client";

import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";

interface SolutionIndustry { id: string; title: string; description: string; icon: string; order: number; }

const EMPTY = { title: "", description: "", icon: "", order: "0" };

export default function SolutionIndustriesAdmin() {
    const [items, setItems] = useState<SolutionIndustry[]>([]);
    const [editing, setEditing] = useState<SolutionIndustry | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState(EMPTY);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const token = typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;
    const headers = { Authorization: `Bearer ${token}` };

    const load = async () => {
        setLoading(true);
        try { setItems(await fetchApi("/solution-industries")); } catch { }
        setLoading(false);
    };

    useEffect(() => { load(); }, []);

    const open = (item?: SolutionIndustry) => {
        if (item) { setEditing(item); setForm({ title: item.title, description: item.description, icon: item.icon, order: String(item.order) }); }
        else { setEditing(null); setForm(EMPTY); }
        setShowForm(true);
    };

    const save = async () => {
        setSaving(true);
        const body = { title: form.title, description: form.description, icon: form.icon, order: parseInt(form.order) };
        try {
            if (editing) await fetchApi(`/solution-industries/${editing.id}`, { method: "PATCH", body: JSON.stringify(body), headers });
            else await fetchApi("/solution-industries", { method: "POST", body: JSON.stringify(body), headers });
            setShowForm(false); await load();
        } catch (e: any) { alert(e.message); }
        setSaving(false);
    };

    const remove = async (id: string) => {
        if (!confirm("Delete this industry?")) return;
        try { await fetchApi(`/solution-industries/${id}`, { method: "DELETE", headers }); await load(); } catch (e: any) { alert(e.message); }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-white">Solution Industries</h2>
                    <p className="text-sm text-white/40 mt-1">"Solutions tailored to your industry" section</p>
                </div>
                <button onClick={() => open()} className="px-4 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg text-sm">+ Add Industry</button>
            </div>

            {showForm && (
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
                    <h3 className="font-semibold text-white text-sm">{editing ? "Edit Industry" : "New Industry"}</h3>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-2">
                            <label className="text-xs text-white/50 mb-1 block">Title</label>
                            <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} placeholder="e.g. E-Commerce" />
                        </div>
                        <div>
                            <label className="text-xs text-white/50 mb-1 block">Order</label>
                            <input type="number" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={form.order} onChange={e => setForm(p => ({ ...p, order: e.target.value }))} />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs text-white/50 mb-1 block">Icon Name (lucide-react icon, e.g. ShoppingCart)</label>
                        <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={form.icon} onChange={e => setForm(p => ({ ...p, icon: e.target.value }))} placeholder="e.g. ShoppingCart" />
                    </div>
                    <div>
                        <label className="text-xs text-white/50 mb-1 block">Description</label>
                        <textarea rows={2} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500 resize-none" value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} />
                    </div>
                    <div className="flex gap-3 justify-end">
                        <button onClick={() => setShowForm(false)} className="px-4 py-2 text-sm text-white/50 hover:text-white">Cancel</button>
                        <button onClick={save} disabled={saving} className="px-4 py-2 bg-green-500 hover:bg-green-400 disabled:opacity-50 text-black font-semibold rounded-lg text-sm">{saving ? "Saving…" : "Save"}</button>
                    </div>
                </div>
            )}

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                {loading ? <div className="p-8 text-center text-white/30 text-sm">Loading…</div> :
                    items.length === 0 ? <div className="p-8 text-center text-white/30 text-sm">No industries yet.</div> : (
                        <table className="w-full text-sm">
                            <thead className="border-b border-white/10">
                                <tr>
                                    <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">#</th>
                                    <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Icon</th>
                                    <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Title</th>
                                    <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Description</th>
                                    <th className="px-5 py-3" />
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {items.map(item => (
                                    <tr key={item.id} className="hover:bg-white/3 transition">
                                        <td className="px-5 py-4 text-white/40">{item.order}</td>
                                        <td className="px-5 py-4 text-white/60 font-mono text-xs">{item.icon}</td>
                                        <td className="px-5 py-4 text-white font-medium">{item.title}</td>
                                        <td className="px-5 py-4 text-white/50 max-w-xs truncate text-xs">{item.description}</td>
                                        <td className="px-5 py-4 flex gap-3 justify-end">
                                            <button onClick={() => open(item)} className="text-xs text-white/40 hover:text-white">Edit</button>
                                            <button onClick={() => remove(item.id)} className="text-xs text-red-400 hover:text-red-300">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
            </div>
        </div>
    );
}
