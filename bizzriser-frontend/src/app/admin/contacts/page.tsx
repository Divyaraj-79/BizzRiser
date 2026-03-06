"use client";

import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";

interface Contact { id: string; firstName: string; lastName: string; email: string; company?: string; phone?: string; industry?: string; message: string; status: string; createdAt: string; }

const STATUS_COLORS: Record<string, string> = {
    NEW: "bg-blue-500/20 text-blue-400",
    IN_PROGRESS: "bg-yellow-500/20 text-yellow-400",
    RESOLVED: "bg-green-500/20 text-green-400",
};

export default function ContactsAdmin() {
    const [items, setItems] = useState<Contact[]>([]);
    const [selected, setSelected] = useState<Contact | null>(null);
    const [loading, setLoading] = useState(true);
    const token = typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;
    const headers = { Authorization: `Bearer ${token}` };

    const load = async () => {
        setLoading(true);
        try { setItems(await fetchApi("/contacts", { headers })); } catch { }
        setLoading(false);
    };

    useEffect(() => { load(); }, []);

    const updateStatus = async (id: string, status: string) => {
        try { await fetchApi(`/contacts/${id}`, { method: "PATCH", body: JSON.stringify({ status }), headers }); await load(); setSelected(null); } catch { }
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            <div>
                <h2 className="text-xl font-bold text-white">Contact Inquiries</h2>
                <p className="text-sm text-white/40 mt-1">All contact form submissions from bizzriser.com</p>
            </div>

            {selected && (
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h3 className="font-bold text-white text-lg">{selected.firstName} {selected.lastName}</h3>
                            <p className="text-sm text-white/50">{selected.email} {selected.company && `· ${selected.company}`}</p>
                            {selected.phone && <p className="text-xs text-white/30">{selected.phone}</p>}
                            {selected.industry && <p className="text-xs text-white/30">Industry: {selected.industry}</p>}
                        </div>
                        <button onClick={() => setSelected(null)} className="text-white/40 hover:text-white text-lg leading-none">✕</button>
                    </div>
                    <div className="bg-black/20 rounded-lg p-4 text-sm text-white/70 whitespace-pre-wrap">{selected.message}</div>
                    <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-xs text-white/30">Update status:</span>
                        {["NEW", "IN_PROGRESS", "RESOLVED"].map(s => (
                            <button key={s} onClick={() => updateStatus(selected.id, s)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${selected.status === s ? STATUS_COLORS[s] : "bg-white/5 text-white/30 hover:bg-white/10"}`}>{s.replace("_", " ")}</button>
                        ))}
                    </div>
                </div>
            )}

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                {loading ? <div className="p-8 text-center text-white/30 text-sm">Loading…</div> :
                    items.length === 0 ? <div className="p-8 text-center text-white/30 text-sm">No inquiries yet.</div> : (
                        <table className="w-full text-sm">
                            <thead className="border-b border-white/10">
                                <tr>
                                    <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Name</th>
                                    <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Email</th>
                                    <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Industry</th>
                                    <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Status</th>
                                    <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Date</th>
                                    <th className="px-5 py-3" />
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {items.map(c => (
                                    <tr key={c.id} className="hover:bg-white/3 transition cursor-pointer" onClick={() => setSelected(c)}>
                                        <td className="px-5 py-4 text-white font-medium">{c.firstName} {c.lastName}</td>
                                        <td className="px-5 py-4 text-white/50">{c.email}</td>
                                        <td className="px-5 py-4 text-white/40 text-xs">{c.industry || "—"}</td>
                                        <td className="px-5 py-4"><span className={`px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_COLORS[c.status] ?? "bg-white/5 text-white/30"}`}>{c.status?.replace("_", " ")}</span></td>
                                        <td className="px-5 py-4 text-white/30 text-xs">{new Date(c.createdAt).toLocaleDateString()}</td>
                                        <td className="px-5 py-4 text-xs text-white/30">View →</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
            </div>
        </div>
    );
}
