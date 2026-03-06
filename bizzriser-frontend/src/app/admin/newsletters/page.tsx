"use client";

import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";

interface Subscriber { id: string; email: string; status: string; createdAt: string; }

export default function NewslettersAdmin() {
    const [items, setItems] = useState<Subscriber[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const token = typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;
    const headers = { Authorization: `Bearer ${token}` };

    const load = async () => {
        setLoading(true);
        try { setItems(await fetchApi("/newsletters", { headers })); } catch { }
        setLoading(false);
    };

    useEffect(() => { load(); }, []);

    const filtered = items.filter(i => i.email.toLowerCase().includes(search.toLowerCase()));

    const exportCSV = () => {
        const csv = ["Email,Status,Date", ...filtered.map(i => `${i.email},${i.status},${new Date(i.createdAt).toLocaleDateString()}`)].join("\n");
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a"); a.href = url; a.download = "newsletter-subscribers.csv"; a.click();
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-white">Newsletter Subscribers</h2>
                    <p className="text-sm text-white/40 mt-1">{items.length} total subscriber{items.length !== 1 ? "s" : ""}</p>
                </div>
                <button onClick={exportCSV} className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white rounded-lg text-sm transition">↓ Export CSV</button>
            </div>

            <div>
                <input
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-green-500"
                    placeholder="Search by email…"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                {loading ? <div className="p-8 text-center text-white/30 text-sm">Loading…</div> :
                    filtered.length === 0 ? <div className="p-8 text-center text-white/30 text-sm">No subscribers found.</div> : (
                        <table className="w-full text-sm">
                            <thead className="border-b border-white/10">
                                <tr>
                                    <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Email</th>
                                    <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Status</th>
                                    <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Date Joined</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {filtered.map(s => (
                                    <tr key={s.id} className="hover:bg-white/3 transition">
                                        <td className="px-5 py-4 text-white">{s.email}</td>
                                        <td className="px-5 py-4">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${s.status === "SUBSCRIBED" ? "bg-green-500/20 text-green-400" : "bg-white/5 text-white/30"}`}>{s.status}</span>
                                        </td>
                                        <td className="px-5 py-4 text-white/40 text-xs">{new Date(s.createdAt).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
            </div>
        </div>
    );
}
