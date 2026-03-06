"use client";

import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";

interface ChatStep { role: "user" | "bot"; message: string; }
interface Chatbot { id: string; industry: string; brand: string; flowSteps: ChatStep[]; }

const EMPTY_STEP: ChatStep = { role: "bot", message: "" };

export default function IndustryChatbotsAdmin() {
    const [items, setItems] = useState<Chatbot[]>([]);
    const [editing, setEditing] = useState<Chatbot | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [industry, setIndustry] = useState("");
    const [brand, setBrand] = useState("");
    const [steps, setSteps] = useState<ChatStep[]>([{ role: "bot", message: "" }]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const token = typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;
    const headers = { Authorization: `Bearer ${token}` };

    const load = async () => {
        setLoading(true);
        try {
            const data = await fetchApi("/industry-chatbots");
            // SQLite returns JSON fields as strings — parse them just in case
            setItems(data.map((cb: any) => ({
                ...cb,
                flowSteps: typeof cb.flowSteps === "string" ? JSON.parse(cb.flowSteps) : (cb.flowSteps ?? []),
            })));
        } catch { }
        setLoading(false);
    };

    useEffect(() => { load(); }, []);

    const open = (item?: Chatbot) => {
        if (item) { setEditing(item); setIndustry(item.industry); setBrand(item.brand); setSteps(item.flowSteps); }
        else { setEditing(null); setIndustry(""); setBrand(""); setSteps([{ role: "bot", message: "" }]); }
        setShowForm(true);
    };

    const addStep = () => setSteps(prev => [...prev, { role: "user", message: "" }]);
    const removeStep = (i: number) => setSteps(prev => prev.filter((_, idx) => idx !== i));
    const updateStep = (i: number, field: keyof ChatStep, val: string) =>
        setSteps(prev => prev.map((s, idx) => idx === i ? { ...s, [field]: val } : s));

    const save = async () => {
        setSaving(true);
        const body = { industry: industry.toLowerCase().replace(/\s+/g, "-"), brand, flowSteps: steps };
        try {
            if (editing) await fetchApi(`/industry-chatbots/${editing.id}`, { method: "PATCH", body: JSON.stringify(body), headers });
            else await fetchApi("/industry-chatbots", { method: "POST", body: JSON.stringify(body), headers });
            setShowForm(false); await load();
        } catch (e: any) { alert(e.message); }
        setSaving(false);
    };

    const remove = async (id: string) => {
        if (!confirm("Delete this chatbot flow?")) return;
        try { await fetchApi(`/industry-chatbots/${id}`, { method: "DELETE", headers }); await load(); } catch (e: any) { alert(e.message); }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-white">Industry Chatbot Flows</h2>
                    <p className="text-sm text-white/40 mt-1">"Industry-Specific Automation Solutions" demo conversations</p>
                </div>
                <button onClick={() => open()} className="px-4 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg text-sm">+ Add Industry Flow</button>
            </div>

            {showForm && (
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-5">
                    <h3 className="font-semibold text-white text-sm">{editing ? "Edit Flow" : "New Flow"}</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-xs text-white/50 mb-1 block">Industry (slug, e.g. "travel")</label>
                            <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={industry} onChange={e => setIndustry(e.target.value)} placeholder="travel" />
                        </div>
                        <div>
                            <label className="text-xs text-white/50 mb-1 block">Default Brand Name</label>
                            <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={brand} onChange={e => setBrand(e.target.value)} placeholder="Travel X" />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <label className="text-xs text-white/50">Chat Flow Steps</label>
                            <button onClick={addStep} className="text-xs text-green-400 hover:text-green-300">+ Add Step</button>
                        </div>
                        {steps.map((step, i) => (
                            <div key={i} className="flex gap-3 items-start">
                                <select value={step.role} onChange={e => updateStep(i, "role", e.target.value as any)} className="bg-white/5 border border-white/10 rounded-lg px-2 py-2 text-xs text-white shrink-0 focus:outline-none focus:border-green-500">
                                    <option value="bot">🤖 Bot</option>
                                    <option value="user">👤 User</option>
                                </select>
                                <input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={step.message} onChange={e => updateStep(i, "message", e.target.value)} placeholder="Message..." />
                                <button onClick={() => removeStep(i)} className="text-red-400 hover:text-red-300 text-xs pt-2">✕</button>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-3 justify-end">
                        <button onClick={() => setShowForm(false)} className="px-4 py-2 text-sm text-white/50 hover:text-white">Cancel</button>
                        <button onClick={save} disabled={saving} className="px-4 py-2 bg-green-500 hover:bg-green-400 disabled:opacity-50 text-black font-semibold rounded-lg text-sm">{saving ? "Saving…" : "Save"}</button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {loading ? <div className="col-span-2 p-8 text-center text-white/30 text-sm bg-white/5 border border-white/10 rounded-xl">Loading…</div> :
                    items.length === 0 ? <div className="col-span-2 p-8 text-center text-white/30 text-sm bg-white/5 border border-white/10 rounded-xl">No chatbot flows yet.</div> :
                        items.map(cb => (
                            <div key={cb.id} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-bold text-white capitalize">{cb.industry}</h3>
                                        <p className="text-xs text-white/40">Default brand: {cb.brand}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button onClick={() => open(cb)} className="text-xs text-white/40 hover:text-white">Edit</button>
                                        <button onClick={() => remove(cb.id)} className="text-xs text-red-400 hover:text-red-300">Delete</button>
                                    </div>
                                </div>
                                <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                                    {cb.flowSteps.map((s, i) => (
                                        <div key={i} className={`flex gap-2 text-xs ${s.role === "bot" ? "text-green-400" : "text-blue-400"}`}>
                                            <span className="shrink-0">{s.role === "bot" ? "🤖" : "👤"}</span>
                                            <span className="text-white/60">{s.message}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-white/20">{cb.flowSteps.length} steps</p>
                            </div>
                        ))}
            </div>
        </div>
    );
}
