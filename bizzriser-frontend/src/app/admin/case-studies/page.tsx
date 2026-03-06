"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, EyeOff, Briefcase, ExternalLink } from "lucide-react";
import { adminFetch } from "@/lib/admin-api";

export default function AdminCaseStudiesPage() {
    const [caseStudies, setCaseStudies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchCaseStudies = async () => {
        try {
            const data = await adminFetch("/case-studies?all=true");
            setCaseStudies(data);
        } catch (e) {
            console.error("Error fetching case studies", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchCaseStudies(); }, []);

    const handleDelete = async (id: string, title: string) => {
        if (confirm(`Delete case study "${title}"? This cannot be undone.`)) {
            try {
                await adminFetch(`/case-studies/${id}`, { method: "DELETE" });
                setCaseStudies(caseStudies.filter((cs) => cs.id !== id));
            } catch (e) {
                alert("Failed to delete case study: " + e);
            }
        }
    };

    const togglePublish = async (cs: any) => {
        try {
            const updated = await adminFetch(`/case-studies/${cs.id}`, {
                method: "PATCH",
                body: JSON.stringify({ published: !cs.published }),
            });
            setCaseStudies(prev => prev.map(item => item.id === cs.id ? { ...item, published: updated.published } : item));
        } catch (e) {
            alert("Failed to update: " + e);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-white">Case Studies Management</h2>
                    <p className="text-sm text-white/40 mt-1">Showcase your success stories with full SEO and content control.</p>
                </div>
                <Link
                    href="/admin/case-studies/new"
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg text-sm transition"
                >
                    <Plus size={16} />
                    New Case Study
                </Link>
            </div>

            {/* Table */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                {loading ? (
                    <div className="p-10 text-center text-white/30 text-sm">Loading…</div>
                ) : caseStudies.length === 0 ? (
                    <div className="p-10 text-center text-white/30 text-sm">
                        No case studies yet. <Link href="/admin/case-studies/new" className="text-green-400 hover:text-green-300">Create your first one →</Link>
                    </div>
                ) : (
                    <table className="w-full text-sm">
                        <thead className="border-b border-white/10 bg-white/3">
                            <tr>
                                <th className="px-5 py-3 text-left text-xs text-white/40 font-medium w-1/3">Company & Title</th>
                                <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Industry</th>
                                <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Metric</th>
                                <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Status</th>
                                <th className="px-5 py-3 text-right text-xs text-white/40 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {caseStudies.map(cs => (
                                <tr key={cs.id} className="hover:bg-white/3 transition">
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                                                {cs.logoUrl ? (
                                                    <img src={cs.logoUrl} alt={cs.company} className="w-full h-full object-contain p-1" />
                                                ) : (
                                                    <Briefcase size={14} className="text-white/20" />
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-white line-clamp-1">{cs.company}</p>
                                                <p className="text-xs text-white/30 mt-0.5 line-clamp-1">{cs.title}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4">
                                        <span className="px-2 py-0.5 rounded-full bg-white/10 text-xs text-white/70">{cs.industry}</span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-green-400 font-bold">{cs.metric}</span>
                                            <span className="text-[10px] text-white/30 uppercase">{cs.metricLabel}</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4">
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${cs.published ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                                            {cs.published ? "Published" : "Draft"}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3 justify-end">
                                            <button onClick={() => togglePublish(cs)} title={cs.published ? "Unpublish" : "Publish"} className="text-white/30 hover:text-green-400 transition">
                                                {cs.published ? <EyeOff size={15} /> : <Eye size={15} />}
                                            </button>
                                            <Link href={`/admin/case-studies/${cs.id}`} className="text-white/30 hover:text-white transition">
                                                <Edit size={15} />
                                            </Link>
                                            <button onClick={() => handleDelete(cs.id, cs.company)} className="text-white/30 hover:text-red-400 transition">
                                                <Trash2 size={15} />
                                            </button>
                                        </div>
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
