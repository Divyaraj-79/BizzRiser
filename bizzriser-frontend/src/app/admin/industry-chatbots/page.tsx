"use client";

import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";

interface ChatStep { sender: "user" | "bot"; text: string; }
interface Chatbot { id: string; industry: string; brand: string; flowSteps: ChatStep[]; }

const EMPTY_STEP: ChatStep = { sender: "bot", text: "" };

export default function IndustryChatbotsAdmin() {
    const [items, setItems] = useState<Chatbot[]>([]);
    const [editing, setEditing] = useState<Chatbot | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [apiIndustries, setApiIndustries] = useState<{ id: string, title: string }[]>([]);
    const [industry, setIndustry] = useState("");
    const [brand, setBrand] = useState("");
    const [steps, setSteps] = useState<ChatStep[]>([{ sender: "bot", text: "" }]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const token = typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;
    const headers = { Authorization: `Bearer ${token}` };

    const load = async () => {
        setLoading(true);
        try {
            const indData = await fetchApi("/solution-industries");
            setApiIndustries(indData ?? []);

            const data = await fetchApi("/industry-chatbots");
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
        else { setEditing(null); setIndustry(apiIndustries.length > 0 ? apiIndustries[0].id : ""); setBrand(""); setSteps([{ sender: "bot", text: "" }]); }
        setShowForm(true);
    };

    const addStep = () => setSteps(prev => [...prev, { sender: "user", text: "" }]);
    const removeStep = (i: number) => setSteps(prev => prev.filter((_, idx) => idx !== i));
    const updateStep = (i: number, field: keyof ChatStep, val: string) =>
        setSteps(prev => prev.map((s, idx) => idx === i ? { ...s, [field]: val } : s));

    const save = async () => {
        setSaving(true);
        const body = { industry, brand, flowSteps: steps };
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
                            <label className="text-xs text-white/50 mb-1 block">Solution Industry (Links to Dropdown)</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={industry} onChange={e => setIndustry(e.target.value)}>
                                <option value="" disabled>Select an Industry...</option>
                                {apiIndustries.map(ind => (
                                    <option key={ind.id} value={ind.id}>{ind.title}</option>
                                ))}
                            </select>
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
                                <select value={step.sender} onChange={e => updateStep(i, "sender", e.target.value as any)} className="bg-white/5 border border-white/10 rounded-lg px-2 py-2 text-xs text-white shrink-0 focus:outline-none focus:border-green-500">
                                    <option value="bot">🤖 Bot</option>
                                    <option value="user">👤 User</option>
                                </select>
                                <input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={step.text} onChange={e => updateStep(i, "text", e.target.value)} placeholder="Message..." />
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
                                        <h3 className="font-bold text-white capitalize">{apiIndustries.find(ind => ind.id === cb.industry)?.title || cb.industry}</h3>
                                        <p className="text-xs text-white/40">Default brand: {cb.brand}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button onClick={() => open(cb)} className="text-xs text-white/40 hover:text-white">Edit</button>
                                        <button onClick={() => remove(cb.id)} className="text-xs text-red-400 hover:text-red-300">Delete</button>
                                    </div>
                                </div>
                                <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                                    {cb.flowSteps.map((s, i) => (
                                        <div key={i} className={`flex gap-2 text-xs ${s.sender === "bot" ? "text-green-400" : "text-blue-400"}`}>
                                            <span className="shrink-0">{s.sender === "bot" ? "🤖" : "👤"}</span>
                                            <span className="text-white/60">{s.text}</span>
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
