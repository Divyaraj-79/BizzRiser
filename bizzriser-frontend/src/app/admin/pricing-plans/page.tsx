"use client";

import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";

interface PricingPlan { id: string; name: string; price: string; description: string; features: string[]; recommended: boolean; billingCycle: string; }

const EMPTY = { name: "", price: "", description: "", features: "", recommended: false, billingCycle: "monthly" };

export default function PricingPlansAdmin() {
    const [items, setItems] = useState<PricingPlan[]>([]);
    const [editing, setEditing] = useState<PricingPlan | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState(EMPTY);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const token = typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;
    const headers = { Authorization: `Bearer ${token}` };

    const load = async () => {
        setLoading(true);
        try { setItems(await fetchApi("/pricing-plans")); } catch { }
        setLoading(false);
    };

    useEffect(() => { load(); }, []);

    const open = (item?: PricingPlan) => {
        if (item) { setEditing(item); setForm({ name: item.name, price: item.price, description: item.description, features: item.features.join("\n"), recommended: item.recommended, billingCycle: item.billingCycle || "monthly" }); }
        else { setEditing(null); setForm(EMPTY); }
        setShowForm(true);
    };

    const save = async () => {
        setSaving(true);
        const body = {
            name: form.name,
            price: form.price,
            description: form.description,
            features: form.features.split("\n").map(f => f.trim()).filter(Boolean),
            recommended: form.recommended,
            billingCycle: form.billingCycle
        };
        try {
            if (editing) await fetchApi(`/pricing-plans/${editing.id}`, { method: "PATCH", body: JSON.stringify(body), headers });
            else await fetchApi("/pricing-plans", { method: "POST", body: JSON.stringify(body), headers });
            setShowForm(false); await load();
        } catch (e: any) { alert(e.message); }
        setSaving(false);
    };

    const remove = async (id: string) => {
        if (!confirm("Delete this plan?")) return;
        try { await fetchApi(`/pricing-plans/${id}`, { method: "DELETE", headers }); await load(); } catch (e: any) { alert(e.message); }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-white">Pricing Plans</h2>
                    <p className="text-sm text-white/40 mt-1">Manage tiers shown on the Pricing page</p>
                </div>
                <button onClick={() => open()} className="px-4 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg text-sm">+ Add Plan</button>
            </div>

            {showForm && (
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
                    <h3 className="font-semibold text-white text-sm">{editing ? "Edit Plan" : "New Plan"}</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-xs text-white/50 mb-1 block">Plan Name</label>
                            <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="e.g. Starter" />
                        </div>
                        <div>
                            <label className="text-xs text-white/50 mb-1 block">Price (e.g. ₹2,999/mo)</label>
                            <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={form.price} onChange={e => setForm(p => ({ ...p, price: e.target.value }))} placeholder="₹2,999/mo" />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs text-white/50 mb-1 block">Billing Cycle</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer text-sm text-white/70">
                                <input type="radio" name="billingCycle" value="monthly" checked={form.billingCycle === "monthly"} onChange={e => setForm(p => ({ ...p, billingCycle: e.target.value }))} className="accent-green-500" />
                                Monthly
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer text-sm text-white/70">
                                <input type="radio" name="billingCycle" value="yearly" checked={form.billingCycle === "yearly"} onChange={e => setForm(p => ({ ...p, billingCycle: e.target.value }))} className="accent-green-500" />
                                Yearly
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="text-xs text-white/50 mb-1 block">Description</label>
                        <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500" value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} />
                    </div>
                    <div>
                        <label className="text-xs text-white/50 mb-1 block">Features (one per line)</label>
                        <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-green-500 resize-none font-mono" value={form.features} onChange={e => setForm(p => ({ ...p, features: e.target.value }))} placeholder={"1,000 messages/month\n1 WhatsApp number\nBasic support"} />
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={form.recommended} onChange={e => setForm(p => ({ ...p, recommended: e.target.checked }))} className="w-4 h-4 rounded accent-green-500" />
                        <span className="text-sm text-white/70">Mark as Recommended</span>
                    </label>
                    <div className="flex gap-3 justify-end">
                        <button onClick={() => setShowForm(false)} className="px-4 py-2 text-sm text-white/50 hover:text-white">Cancel</button>
                        <button onClick={save} disabled={saving} className="px-4 py-2 bg-green-500 hover:bg-green-400 disabled:opacity-50 text-black font-semibold rounded-lg text-sm">{saving ? "Saving…" : "Save"}</button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {loading ? <div className="col-span-3 p-8 text-center text-white/30 text-sm bg-white/5 border border-white/10 rounded-xl">Loading…</div> :
                    items.length === 0 ? <div className="col-span-3 p-8 text-center text-white/30 text-sm bg-white/5 border border-white/10 rounded-xl">No plans yet.</div> :
                        items.map(plan => (
                            <div key={plan.id} className={`relative bg-white/5 border rounded-xl p-5 space-y-3 ${plan.recommended ? "border-green-500/50" : "border-white/10"}`}>
                                <div className="flex gap-2">
                                    {plan.recommended && <span className="text-[10px] bg-green-500 text-black font-bold px-2 py-0.5 rounded-full">Recommended</span>}
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${plan.billingCycle === "yearly" ? "bg-blue-500 text-white" : "bg-white/10 text-white/50 text-xs"}`}>
                                        {plan.billingCycle === "yearly" ? "Yearly" : "Monthly"}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-white">{plan.name}</h3>
                                    <span className="text-green-400 font-bold">{plan.price}</span>
                                </div>
                                <p className="text-xs text-white/50">{plan.description}</p>
                                <ul className="text-xs text-white/60 space-y-1">
                                    {plan.features.map((f, i) => <li key={i} className="flex items-start gap-1"><span className="text-green-400 mt-0.5">✓</span>{f}</li>)}
                                </ul>
                                <div className="flex gap-3 pt-2 border-t border-white/5">
                                    <button onClick={() => open(plan)} className="text-xs text-white/40 hover:text-white">Edit</button>
                                    <button onClick={() => remove(plan.id)} className="text-xs text-red-400 hover:text-red-300">Delete</button>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    );
}
