"use client";

import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";

interface Testimonial { id: string; author: string; role: string; content: string; rating: number; published: boolean; }

const EMPTY = { author: "", role: "", content: "", rating: "5", published: false };

export default function TestimonialsAdmin() {
    const [items, setItems] = useState<Testimonial[]>([]);
    const [editing, setEditing] = useState<Testimonial | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState(EMPTY);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const token = typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;
    const headers = { Authorization: `Bearer ${token}` };

    const load = async () => {
        setLoading(true);
        try { setItems(await fetchApi("/testimonials", { headers })); } catch { }
        setLoading(false);
    };

    useEffect(() => { load(); }, []);

    const open = (item?: Testimonial) => {
        if (item) { setEditing(item); setForm({ author: item.author, role: item.role, content: item.content, rating: String(item.rating), published: item.published }); }
        else { setEditing(null); setForm(EMPTY); }
        setShowForm(true);
    };

    const save = async () => {
        setSaving(true);
        const body = { author: form.author, role: form.role, content: form.content, rating: parseInt(form.rating), published: form.published };
        try {
            if (editing) await fetchApi(`/testimonials/${editing.id}`, { method: "PATCH", body: JSON.stringify(body), headers });
            else await fetchApi("/testimonials", { method: "POST", body: JSON.stringify(body), headers });
            setShowForm(false); await load();
        } catch (e: any) { alert(e.message); }
        setSaving(false);
    };

    const remove = async (id: string) => {
        if (!confirm("Delete?")) return;
        try { await fetchApi(`/testimonials/${id}`, { method: "DELETE", headers }); await load(); } catch (e: any) { alert(e.message); }
    };

    const toggle = async (item: Testimonial) => {
        try { await fetchApi(`/testimonials/${item.id}`, { method: "PATCH", body: JSON.stringify({ published: !item.published }), headers }); await load(); } catch { }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-white">Testimonials</h2>
                    <p className="text-sm text-white/40 mt-1">"Loved by 10,000+ Growth Teams" section</p>
                </div>
                <button onClick={() => open()} className="px-4 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg text-sm">+ Add Review</button>
            </div>

            {showForm && (
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
                    <h3 className="font-semibold text-white text-sm">{editing ? "Edit Review" : "New Review"}</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-xs text-white/50 mb-1 block">Author Name</label>
                            <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={form.author} onChange={e => setForm(p => ({ ...p, author: e.target.value }))} />
                        </div>
                        <div>
                            <label className="text-xs text-white/50 mb-1 block">Role / Company</label>
                            <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={form.role} onChange={e => setForm(p => ({ ...p, role: e.target.value }))} />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs text-white/50 mb-1 block">Review Content</label>
                        <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500 resize-none" value={form.content} onChange={e => setForm(p => ({ ...p, content: e.target.value }))} />
                    </div>
                    <div className="flex items-center gap-6">
                        <div>
                            <label className="text-xs text-white/50 mb-1 block">Rating (1-5)</label>
                            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={form.rating} onChange={e => setForm(p => ({ ...p, rating: e.target.value }))}>
                                {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} ★</option>)}
                            </select>
                        </div>
                        <label className="flex items-center gap-2 cursor-pointer mt-4">
                            <input type="checkbox" checked={form.published} onChange={e => setForm(p => ({ ...p, published: e.target.checked }))} className="w-4 h-4 rounded accent-green-500" />
                            <span className="text-sm text-white/70">Published (visible on site)</span>
                        </label>
                    </div>
                    <div className="flex gap-3 justify-end">
                        <button onClick={() => setShowForm(false)} className="px-4 py-2 text-sm text-white/50 hover:text-white">Cancel</button>
                        <button onClick={save} disabled={saving} className="px-4 py-2 bg-green-500 hover:bg-green-400 disabled:opacity-50 text-black font-semibold rounded-lg text-sm">{saving ? "Saving…" : "Save"}</button>
                    </div>
                </div>
            )}

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                {loading ? <div className="p-8 text-center text-white/30 text-sm">Loading…</div> :
                    items.length === 0 ? <div className="p-8 text-center text-white/30 text-sm">No testimonials yet.</div> : (
                        <table className="w-full text-sm">
                            <thead className="border-b border-white/10">
                                <tr>
                                    <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Author</th>
                                    <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Rating</th>
                                    <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Content</th>
                                    <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Status</th>
                                    <th className="px-5 py-3" />
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {items.map(t => (
                                    <tr key={t.id} className="hover:bg-white/3 transition">
                                        <td className="px-5 py-4">
                                            <p className="text-white font-medium">{t.author}</p>
                                            <p className="text-xs text-white/40">{t.role}</p>
                                        </td>
                                        <td className="px-5 py-4 text-yellow-400">{"★".repeat(t.rating)}</td>
                                        <td className="px-5 py-4 text-white/60 max-w-xs truncate">{t.content}</td>
                                        <td className="px-5 py-4">
                                            <button onClick={() => toggle(t)} className={`px-2.5 py-1 rounded-full text-xs font-medium transition ${t.published ? "bg-green-500/20 text-green-400" : "bg-white/5 text-white/30"}`}>
                                                {t.published ? "Published" : "Draft"}
                                            </button>
                                        </td>
                                        <td className="px-5 py-4 flex gap-3 justify-end">
                                            <button onClick={() => open(t)} className="text-xs text-white/40 hover:text-white transition">Edit</button>
                                            <button onClick={() => remove(t.id)} className="text-xs text-red-400 hover:text-red-300 transition">Delete</button>
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
