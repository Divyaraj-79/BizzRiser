"use client";

import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";
import { motion } from "framer-motion";
import { Save, Plus, Trash2, Edit2, Check, X } from "lucide-react";

interface AboutSection {
    id: string;
    title: string;
    description: string;
}

interface AboutStat {
    id: string;
    label: string;
    value: string;
    order: number;
}

export default function AboutSectionAdmin() {
    const [section, setSection] = useState<AboutSection | null>(null);
    const [stats, setStats] = useState<AboutStat[]>([]);
    const [loading, setLoading] = useState(true);
    const [savingSection, setSavingSection] = useState(false);
    const [editingStat, setEditingStat] = useState<AboutStat | null>(null);
    const [statForm, setStatForm] = useState({ label: "", value: "", order: "0" });
    const [isAddingStat, setIsAddingStat] = useState(false);

    const token = typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;

    const loadData = async () => {
        setLoading(true);
        try {
            const [secData, statsData] = await Promise.all([
                fetchApi("/partner-info/section"),
                fetchApi("/partner-info/stats"),
            ]);
            setSection(secData);
            setStats(statsData);
        } catch (e) {
            console.error(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleSaveSection = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!section) return;
        setSavingSection(true);
        try {
            await fetchApi("/partner-info/section", {
                method: "PATCH",
                body: JSON.stringify({
                    title: section.title,
                    description: section.description,
                }),
                headers: { Authorization: `Bearer ${token}` },
            });
            alert("Section updated successfully");
        } catch (e: any) {
            alert(e.message);
        }
        setSavingSection(false);
    };

    const handleSaveStat = async () => {
        const body = {
            label: statForm.label,
            value: statForm.value,
            order: parseInt(statForm.order),
        };
        try {
            if (editingStat) {
                await fetchApi(`/partner-info/stats/${editingStat.id}`, {
                    method: "PATCH",
                    body: JSON.stringify(body),
                    headers: { Authorization: `Bearer ${token}` },
                });
            } else {
                await fetchApi("/partner-info/stats", {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: { Authorization: `Bearer ${token}` },
                });
            }
            setEditingStat(null);
            setIsAddingStat(false);
            setStatForm({ label: "", value: "", order: "0" });
            await loadData();
        } catch (e: any) {
            alert(e.message);
        }
    };

    const handleDeleteStat = async (id: string) => {
        if (!confirm("Delete this stat?")) return;
        try {
            await fetchApi(`/partner-info/stats/${id}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            });
            await loadData();
        } catch (e: any) {
            alert(e.message);
        }
    };

    if (loading) return <div className="p-8 text-center text-white/30">Loading...</div>;

    return (
        <div className="space-y-10 pb-20">
            {/* 1. Main Content Section */}
            <section className="bg-[#151820] border border-white/5 rounded-[2.5rem] overflow-hidden">
                <div className="px-10 py-8 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-black text-white uppercase tracking-wider">Main Content</h2>
                        <p className="text-xs text-white/30 font-medium">Title and Description for "Powered by"</p>
                    </div>
                    <button
                        onClick={handleSaveSection}
                        disabled={savingSection}
                        className="flex items-center gap-2 px-6 py-2.5 bg-bizz-primary text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-bizz-primary/80 transition-all disabled:opacity-50"
                    >
                        <Save size={16} />
                        {savingSection ? "Saving..." : "Save Changes"}
                    </button>
                </div>

                <div className="p-10 space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-4">Section Title</label>
                        <input
                            className="w-full px-6 py-4 bg-[#1a1d26] border border-white/5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-bizz-primary/50 transition-all"
                            value={section?.title || ""}
                            onChange={(e) => setSection((prev) => prev ? { ...prev, title: e.target.value } : null)}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-4">Description Text</label>
                        <textarea
                            rows={4}
                            className="w-full px-6 py-4 bg-[#1a1d26] border border-white/5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-bizz-primary/50 transition-all resize-none"
                            value={section?.description || ""}
                            onChange={(e) => setSection((prev) => prev ? { ...prev, description: e.target.value } : null)}
                        />
                    </div>
                </div>
            </section>

            {/* 2. Stats Management Section */}
            <section className="bg-[#151820] border border-white/5 rounded-[2.5rem] overflow-hidden">
                <div className="px-10 py-8 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-black text-white uppercase tracking-wider">Partner Stats</h2>
                        <p className="text-xs text-white/30 font-medium">The 4 cards shown below the description</p>
                    </div>
                    {!isAddingStat && (
                        <button
                            onClick={() => setIsAddingStat(true)}
                            className="flex items-center gap-2 px-6 py-2.5 bg-white/5 text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all border border-white/5"
                        >
                            <Plus size={16} />
                            Add New Stat
                        </button>
                    )}
                </div>

                <div className="p-10">
                    {(isAddingStat || editingStat) && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8 p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-4">Value (e.g. 10+)</label>
                                    <input
                                        className="w-full px-6 py-3.5 bg-[#1a1d26] border border-white/5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-bizz-primary/50 transition-all"
                                        value={statForm.value}
                                        onChange={(e) => setStatForm((prev) => ({ ...prev, value: e.target.value }))}
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-1">
                                    <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-4">Label</label>
                                    <input
                                        className="w-full px-6 py-3.5 bg-[#1a1d26] border border-white/5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-bizz-primary/50 transition-all"
                                        value={statForm.label}
                                        onChange={(e) => setStatForm((prev) => ({ ...prev, label: e.target.value }))}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-4">Order</label>
                                    <input
                                        type="number"
                                        className="w-full px-6 py-3.5 bg-[#1a1d26] border border-white/5 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-bizz-primary/50 transition-all"
                                        value={statForm.order}
                                        onChange={(e) => setStatForm((prev) => ({ ...prev, order: e.target.value }))}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => {
                                        setIsAddingStat(false);
                                        setEditingStat(null);
                                        setStatForm({ label: "", value: "", order: "0" });
                                    }}
                                    className="px-6 py-2.5 text-xs font-black uppercase tracking-widest text-white/30 hover:text-white transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSaveStat}
                                    className="px-8 py-2.5 bg-gradient-brand text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg hover:shadow-green-500/20 transition-all"
                                >
                                    {editingStat ? "Update Stat" : "Create Stat"}
                                </button>
                            </div>
                        </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {stats.sort((a, b) => a.order - b.order).map((stat) => (
                            <div
                                key={stat.id}
                                className="group relative bg-[#1a1d26] border border-white/5 p-8 rounded-3xl hover:border-bizz-primary/30 transition-all flex items-center justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-2xl font-black text-bizz-primary">{stat.value}</span>
                                        <span className="px-2 py-0.5 bg-white/5 rounded text-[8px] font-black text-white/20 uppercase tracking-tighter">Order {stat.order}</span>
                                    </div>
                                    <p className="text-sm font-bold text-white/60">{stat.label}</p>
                                </div>
                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => {
                                            setEditingStat(stat);
                                            setStatForm({ label: stat.label, value: stat.value, order: String(stat.order) });
                                            setIsAddingStat(false);
                                        }}
                                        className="p-3 bg-white/5 text-white/40 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                                    >
                                        <Edit2 size={16} />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteStat(stat.id)}
                                        className="p-3 bg-red-500/5 text-red-500/40 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {stats.length === 0 && !isAddingStat && (
                        <div className="py-20 text-center border-2 border-dashed border-white/5 rounded-[2rem]">
                            <p className="text-white/20 font-bold uppercase tracking-widest">No stats added yet</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
