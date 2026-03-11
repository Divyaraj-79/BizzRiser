"use client";

import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";
import { Copy } from "lucide-react";

interface SolutionIndustry { id: string; title: string; slug: string; description: string; icon: string; order: number; content?: any; }

const DEFAULT_CONTENT = {
    hero: { headline: "", subheadline: "", shortDescription: "" },
    problem: { title: "", points: [] },
    solution: { title: "", description: "", points: [] },
    useCases: [],
    flow: [],
    benefits: [],
    audiences: [],
    cta: { headline: "", subheadline: "" }
};

const EMPTY = { title: "", slug: "", description: "", icon: "", order: "0", contentJson: JSON.stringify(DEFAULT_CONTENT, null, 2) };

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
        if (item) {
            setEditing(item);
            setForm({
                title: item.title,
                slug: item.slug || "",
                description: item.description,
                icon: item.icon,
                order: String(item.order),
                contentJson: item.content ? JSON.stringify(item.content, null, 2) : JSON.stringify(DEFAULT_CONTENT, null, 2)
            });
        }
        else { setEditing(null); setForm(EMPTY); }
        setShowForm(true);
    };

    const save = async () => {
        // Validate JSON
        let parsedContent = null;
        try {
            parsedContent = JSON.parse(form.contentJson);
        } catch (e) {
            alert("Invalid Content JSON. Please fix formatting errors before saving (Ensure quotes are double quotes, etc).");
            return;
        }

        setSaving(true);
        const body = {
            title: form.title,
            slug: form.slug,
            description: form.description,
            icon: form.icon,
            order: parseInt(form.order),
            content: parsedContent
        };

        try {
            if (editing) await fetchApi(`/solution-industries/${editing.id}`, { method: "PATCH", body: JSON.stringify(body), headers });
            else await fetchApi("/solution-industries", { method: "POST", body: JSON.stringify(body), headers });
            setShowForm(false); await load();
        } catch (e: any) { alert(e.message); }
        setSaving(false);
    };

    const remove = async (id: string) => {
        if (!confirm("Are you sure you want to delete this industry page?")) return;
        try { await fetchApi(`/solution-industries/${id}`, { method: "DELETE", headers }); await load(); } catch (e: any) { alert(e.message); }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-6 pb-20">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-white">Industry Solution Pages</h2>
                    <p className="text-sm text-white/40 mt-1">Manage dynamic industry content and flows</p>
                </div>
                <button onClick={() => open()} className="px-4 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg text-sm">+ Add Industry</button>
            </div>

            {showForm && (
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
                    <h3 className="font-semibold text-white text-lg border-b border-white/10 pb-4">{editing ? "Edit Industry Page" : "New Industry Page"}</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="text-sm font-medium text-white/70 uppercase tracking-wider">Basic Info</h4>
                            <div>
                                <label className="text-xs text-white/50 mb-1 block">Title</label>
                                <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} placeholder="e.g. E-Commerce" />
                            </div>
                            <div>
                                <label className="text-xs text-white/50 mb-1 block">URL Slug (e.g. e-commerce)</label>
                                <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={form.slug} onChange={e => setForm(p => ({ ...p, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-') }))} placeholder="e-commerce" />
                            </div>
                            <div>
                                <label className="text-xs text-white/50 mb-1 block">Icon Name (lucide-react icon, e.g. ShoppingCart)</label>
                                <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={form.icon} onChange={e => setForm(p => ({ ...p, icon: e.target.value }))} placeholder="e.g. ShoppingCart" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="col-span-1">
                                    <label className="text-xs text-white/50 mb-1 block">Order</label>
                                    <input type="number" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={form.order} onChange={e => setForm(p => ({ ...p, order: e.target.value }))} />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs text-white/50 mb-1 block">Card Description (Shown on main solutions page)</label>
                                <textarea rows={2} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500 resize-none" value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center mb-1">
                                <h4 className="text-sm font-medium text-white/70 uppercase tracking-wider">Page Content Data (JSON)</h4>
                                <button type="button" onClick={() => navigator.clipboard.writeText(JSON.stringify(DEFAULT_CONTENT, null, 2))} className="text-xs flex items-center gap-1 text-green-400 hover:text-green-300">
                                    <Copy className="w-3 h-3" /> Copy Template
                                </button>
                            </div>
                            <p className="text-xs text-white/40 mb-2">Configure the content for the dynamic page. Must be valid JSON matching the standard structure.</p>
                            <textarea
                                rows={20}
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-3 text-sm text-green-400 font-mono focus:outline-none focus:border-green-500 shadow-inner"
                                value={form.contentJson}
                                onChange={e => setForm(p => ({ ...p, contentJson: e.target.value }))}
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 justify-end pt-4 border-t border-white/10 mt-6">
                        <button onClick={() => setShowForm(false)} className="px-4 py-2 text-sm text-white/50 hover:text-white">Cancel</button>
                        <button onClick={save} disabled={saving} className="px-4 py-2 bg-green-500 hover:bg-green-400 disabled:opacity-50 text-black font-semibold rounded-lg text-sm">{saving ? "Saving…" : "Save Page"}</button>
                    </div>
                </div>
            )}

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                {loading ? <div className="p-8 text-center text-white/30 text-sm">Loading…</div> :
                    items.length === 0 ? <div className="p-8 text-center text-white/30 text-sm">No industries yet.</div> : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="border-b border-white/10 bg-black/20">
                                    <tr>
                                        <th className="px-5 py-4 text-left text-xs text-white/40 font-medium">#</th>
                                        <th className="px-5 py-4 text-left text-xs text-white/40 font-medium whitespace-nowrap">Page Slug</th>
                                        <th className="px-5 py-4 text-left text-xs text-white/40 font-medium min-w-[150px]">Title</th>
                                        <th className="px-5 py-4 text-left text-xs text-white/40 font-medium min-w-[250px]">Description</th>
                                        <th className="px-5 py-4" />
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {items.map(item => (
                                        <tr key={item.id} className="hover:bg-white/3 transition">
                                            <td className="px-5 py-4 text-white/40">{item.order}</td>
                                            <td className="px-5 py-4">
                                                <span className="bg-white/10 text-white/70 px-2 py-1 rounded text-xs font-mono">/{item.slug}</span>
                                            </td>
                                            <td className="px-5 py-4 flex items-center gap-2">
                                                <span className="text-white font-medium">{item.title}</span>
                                            </td>
                                            <td className="px-5 py-4 text-white/50 max-w-xs truncate">{item.description}</td>
                                            <td className="px-5 py-4 text-right whitespace-nowrap">
                                                <button onClick={() => open(item)} className="text-xs text-white/60 hover:text-white mr-4 transition-colors font-medium">Edit Content</button>
                                                <button onClick={() => remove(item.id)} className="text-xs text-red-400 hover:text-red-300 transition-colors font-medium">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
            </div>
        </div>
    );
}
