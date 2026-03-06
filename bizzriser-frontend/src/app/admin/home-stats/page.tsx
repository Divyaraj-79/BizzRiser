"use client";

import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";

interface HomeStat { id: string; label: string; value: string; order: number; }

export default function HomeStatsAdmin() {
    const [stats, setStats] = useState<HomeStat[]>([]);
    const [editing, setEditing] = useState<HomeStat | null>(null);
    const [form, setForm] = useState({ label: "", value: "", order: "0" });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const token = typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;

    const load = async () => {
        setLoading(true);
        try { setStats(await fetchApi("/home-stats")); } catch { }
        setLoading(false);
    };

    useEffect(() => { load(); }, []);

    const open = (stat?: HomeStat) => {
        if (stat) { setEditing(stat); setForm({ label: stat.label, value: stat.value, order: String(stat.order) }); }
        else { setEditing(null); setForm({ label: "", value: "", order: "0" }); }
    };

    const save = async () => {
        setSaving(true);
        const body = { label: form.label, value: form.value, order: parseInt(form.order) };
        try {
            if (editing) await fetchApi(`/home-stats/${editing.id}`, { method: "PATCH", body: JSON.stringify(body), headers: { Authorization: `Bearer ${token}` } });
            else await fetchApi("/home-stats", { method: "POST", body: JSON.stringify(body), headers: { Authorization: `Bearer ${token}` } });
            setEditing(null); setForm({ label: "", value: "", order: "0" }); await load();
        } catch (e: any) { alert(e.message); }
        setSaving(false);
    };

    const remove = async (id: string) => {
        if (!confirm("Delete this stat?")) return;
        try { await fetchApi(`/home-stats/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }); await load(); } catch (e: any) { alert(e.message); }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-white">Home Stats</h2>
                    <p className="text-sm text-white/40 mt-1">"Numbers That Speak For Themselves" section</p>
                </div>
                <button onClick={() => open()} className="px-4 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg text-sm transition">+ Add Stat</button>
            </div>

            {/* Form */}
            {(editing !== null || form.label !== "" || form.value !== "") && (
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
                    <h3 className="font-semibold text-white text-sm">{editing ? "Edit Stat" : "New Stat"}</h3>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-2">
                            <label className="text-xs text-white/50 mb-1 block">Value (e.g. 10,000+)</label>
                            <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border-green-500" value={form.value} onChange={e => setForm(p => ({ ...p, value: e.target.value }))} placeholder="e.g. 10,000+" />
                        </div>
                        <div>
                            <label className="text-xs text-white/50 mb-1 block">Order</label>
                            <input type="number" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border-green-500" value={form.order} onChange={e => setForm(p => ({ ...p, order: e.target.value }))} />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs text-white/50 mb-1 block">Label</label>
                        <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border-green-500" value={form.label} onChange={e => setForm(p => ({ ...p, label: e.target.value }))} placeholder="e.g. WhatsApp Messages Sent" />
                    </div>
                    <div className="flex gap-3 justify-end">
                        <button onClick={() => { setEditing(null); setForm({ label: "", value: "", order: "0" }); }} className="px-4 py-2 text-sm text-white/50 hover:text-white transition">Cancel</button>
                        <button onClick={save} disabled={saving} className="px-4 py-2 bg-green-500 hover:bg-green-400 disabled:opacity-50 text-black font-semibold rounded-lg text-sm transition">{saving ? "Saving…" : "Save"}</button>
                    </div>
                </div>
            )}

            {/* Table */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                {loading ? (
                    <div className="p-8 text-center text-white/30 text-sm">Loading…</div>
                ) : stats.length === 0 ? (
                    <div className="p-8 text-center text-white/30 text-sm">No stats yet. Add one above.</div>
                ) : (
                    <table className="w-full text-sm">
                        <thead className="border-b border-white/10 bg-white/3">
                            <tr>
                                <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Order</th>
                                <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Value</th>
                                <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Label</th>
                                <th className="px-5 py-3" />
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {stats.map(s => (
                                <tr key={s.id} className="hover:bg-white/3 transition">
                                    <td className="px-5 py-4 text-white/40">{s.order}</td>
                                    <td className="px-5 py-4 text-green-400 font-bold text-lg">{s.value}</td>
                                    <td className="px-5 py-4 text-white/70">{s.label}</td>
                                    <td className="px-5 py-4 flex gap-3 justify-end">
                                        <button onClick={() => open(s)} className="text-xs text-white/40 hover:text-white transition">Edit</button>
                                        <button onClick={() => remove(s.id)} className="text-xs text-red-400 hover:text-red-300 transition">Delete</button>
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
