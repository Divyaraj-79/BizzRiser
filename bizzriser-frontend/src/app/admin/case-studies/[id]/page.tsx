"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Briefcase, Eye, Image as ImageIcon } from "lucide-react";
import { adminFetch } from "@/lib/admin-api";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";

const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), { ssr: false });

const INPUT = "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-green-500 transition";
const LABEL = "block text-xs text-white/50 mb-1.5 font-medium";
const SECTION = "bg-white/5 border border-white/10 rounded-xl p-5 space-y-4";

export default function CaseStudyEditorPage() {
    const router = useRouter();
    const params = useParams();
    const isNew = params.id === "new";

    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);

    const [form, setForm] = useState({
        company: "",
        industry: "",
        slug: "",
        title: "",
        goal: "",
        metric: "",
        metricLabel: "",
        excerpt: "",
        content: "",
        logoUrl: "",
        bannerUrl: "",
        published: false,
        // SEO
        metaTitle: "",
        metaDescription: "",
        metaKeywords: "",
    });

    useEffect(() => {
        if (!isNew) {
            adminFetch(`/case-studies/${params.id}`)
                .then((cs: any) => {
                    setForm({
                        company: cs.company || "",
                        industry: cs.industry || "",
                        slug: cs.slug || "",
                        title: cs.title || "",
                        goal: cs.goal || "",
                        metric: cs.metric || "",
                        metricLabel: cs.metricLabel || "",
                        excerpt: cs.excerpt || "",
                        content: cs.content || "",
                        logoUrl: cs.logoUrl || "",
                        bannerUrl: cs.bannerUrl || "",
                        published: cs.published || false,
                        metaTitle: cs.metaTitle || "",
                        metaDescription: cs.metaDescription || "",
                        metaKeywords: cs.metaKeywords || "",
                    });
                })
                .catch(() => {
                    alert("Failed to load case study. Redirecting...");
                    router.push("/admin/case-studies");
                })
                .finally(() => setLoading(false));
        }
    }, [isNew, params.id, router]);

    const set = (field: string, value: any) => setForm(p => ({ ...p, [field]: value }));

    const slugify = () => {
        const base = `${form.company}-${form.title}`.toLowerCase();
        set("slug", base.replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            if (isNew) {
                await adminFetch("/case-studies", { method: "POST", body: JSON.stringify(form) });
            } else {
                await adminFetch(`/case-studies/${params.id}`, { method: "PATCH", body: JSON.stringify(form) });
            }
            router.push("/admin/case-studies");
        } catch (err: any) {
            alert("Error saving case study: " + err.message);
            setSaving(false);
        }
    };

    if (loading) return <div className="p-8 text-white/40 text-sm">Loading…</div>;

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link href="/admin/case-studies" className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h2 className="text-xl font-bold text-white">{isNew ? "New Case Study" : "Edit Case Study"}</h2>
                    <p className="text-xs text-white/40 mt-0.5">{isNew ? "Create a new success story" : `Editing: ${form.company}`}</p>
                </div>
                <div className="ml-auto flex gap-3">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                        <span className="text-sm text-white/60">Draft</span>
                        <div
                            onClick={() => set("published", !form.published)}
                            className={`relative w-11 h-6 rounded-full transition-colors ${form.published ? "bg-green-500" : "bg-white/10"}`}
                        >
                            <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${form.published ? "translate-x-5" : ""}`} />
                        </div>
                        <span className="text-sm text-white/60">Published</span>
                    </label>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* LEFT / MAIN CONTENT */}
                <div className="lg:col-span-2 space-y-5">

                    {/* Basic Info */}
                    <div className={SECTION}>
                        <h3 className="text-sm font-semibold text-white">Case Study Details</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={LABEL}>Company *</label>
                                <input className={INPUT} value={form.company} onChange={e => set("company", e.target.value)} required placeholder="Acme Corp" />
                            </div>
                            <div>
                                <label className={LABEL}>Industry *</label>
                                <input className={INPUT} value={form.industry} onChange={e => set("industry", e.target.value)} required placeholder="Retail" />
                            </div>
                        </div>
                        <div>
                            <label className={LABEL}>Main Title *</label>
                            <input className={INPUT} value={form.title} onChange={e => set("title", e.target.value)} required placeholder="Doubled Revenue with WhatsApp Automation" />
                        </div>
                        <div className="flex gap-3 items-end">
                            <div className="flex-1">
                                <label className={LABEL}>URL Slug *</label>
                                <input className={INPUT} value={form.slug} onChange={e => set("slug", e.target.value)} required placeholder="acme-corp-whatsapp-automation" />
                            </div>
                            <button type="button" onClick={slugify} className="px-3 py-2.5 text-xs text-green-400 border border-green-500/30 rounded-lg hover:bg-green-500/10 transition whitespace-nowrap">
                                ← Generate
                            </button>
                        </div>
                    </div>

                    {/* Results / Metrics */}
                    <div className={SECTION}>
                        <h3 className="text-sm font-semibold text-white">Results & Goal</h3>
                        <div>
                            <label className={LABEL}>The Goal *</label>
                            <textarea className={INPUT} value={form.goal} onChange={e => set("goal", e.target.value)} required rows={2} placeholder="Acme Corp needed a way to manage 5k+ daily customer inquiries..." />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className={LABEL}>Metric Value (e.g., 250%) *</label>
                                <input className={INPUT} value={form.metric} onChange={e => set("metric", e.target.value)} required placeholder="250%" />
                            </div>
                            <div>
                                <label className={LABEL}>Metric Label (e.g., Revenue Growth) *</label>
                                <input className={INPUT} value={form.metricLabel} onChange={e => set("metricLabel", e.target.value)} required placeholder="Revenue Growth" />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className={SECTION}>
                        <h3 className="text-sm font-semibold text-white">Story Content</h3>
                        <div>
                            <label className={LABEL}>Excerpt * (Compelling Summary)</label>
                            <textarea className={INPUT} value={form.excerpt} onChange={e => set("excerpt", e.target.value)} required rows={3} placeholder="Discover how Acme Corp scaled their support team without increasing headcount..." />
                        </div>
                        <div>
                            <label className={LABEL}>Full Content (Markdown/HTML Support)</label>
                            <div className="markdown-editor-wrapper">
                                <SimpleMdeReact
                                    value={form.content}
                                    onChange={(value) => set("content", value)}
                                    options={{
                                        spellChecker: false,
                                        placeholder: "## Challenge\n...\n## Solution\n...",
                                        hideIcons: ["guide", "fullscreen", "side-by-side"]
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* SEO Section */}
                    <div className={SECTION}>
                        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                            <Eye size={14} className="text-green-400" />
                            SEO Settings
                        </h3>
                        <div>
                            <label className={LABEL}>Meta Title (max 60 chars)</label>
                            <input className={INPUT} value={form.metaTitle} onChange={e => set("metaTitle", e.target.value)} maxLength={60} placeholder="Case Study: Acme Corp | BizzRiser" />
                        </div>
                        <div>
                            <label className={LABEL}>Meta Description (max 160 chars)</label>
                            <textarea className={INPUT} value={form.metaDescription} onChange={e => set("metaDescription", e.target.value)} maxLength={160} rows={2} placeholder="Read how Acme Corp achieved 250% revenue growth using BizzRiser WhatsApp API..." />
                        </div>
                        <div>
                            <label className={LABEL}>Meta Keywords</label>
                            <input className={INPUT} value={form.metaKeywords} onChange={e => set("metaKeywords", e.target.value)} placeholder="whatsapp automation, logistics, revenue growth" />
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="space-y-5">

                    {/* Logo / Image */}
                    <div className={SECTION}>
                        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                            <ImageIcon size={14} /> Logo / Image
                        </h3>
                        <div>
                            <label className={LABEL}>Logo URL</label>
                            <input className={INPUT} value={form.logoUrl} onChange={e => set("logoUrl", e.target.value)} placeholder="https://..." />
                        </div>
                        {form.logoUrl && (
                            <div className="mt-2 rounded-lg bg-white p-4 border border-white/10 h-32 flex items-center justify-center">
                                <img src={form.logoUrl} alt="Preview" className="max-w-full max-h-full object-contain" onError={(e: any) => e.target.style.display = "none"} />
                            </div>
                        )}

                        <div className="mt-4">
                            <label className={LABEL}>Banner Image URL</label>
                            <input className={INPUT} value={form.bannerUrl} onChange={e => set("bannerUrl", e.target.value)} placeholder="https://..." />
                        </div>
                        {form.bannerUrl && (
                            <div className="mt-2 rounded-lg overflow-hidden border border-white/10 aspect-video">
                                <img src={form.bannerUrl} alt="Banner Preview" className="w-full h-full object-cover" onError={(e: any) => e.target.style.display = "none"} />
                            </div>
                        )}
                        <p className="text-xs text-white/30 mt-2">Recommended for a premium card look & feel.</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button
                            type="submit"
                            disabled={saving}
                            className="w-full py-3 bg-green-500 hover:bg-green-400 disabled:opacity-50 text-black font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition"
                        >
                            <Save size={16} />
                            {saving ? "Saving…" : isNew ? "Create Case Study" : "Save Changes"}
                        </button>
                        <Link href="/admin/case-studies" className="w-full py-2.5 text-center text-sm text-white/40 hover:text-white border border-white/10 rounded-xl transition">
                            Cancel
                        </Link>
                    </div>

                    {/* Tip Card */}
                    <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                        <div className="flex items-center gap-2 text-green-400 mb-2">
                            <Briefcase size={14} />
                            <span className="text-xs font-bold uppercase tracking-wider">Tip</span>
                        </div>
                        <p className="text-xs text-white/40 leading-relaxed">
                            Focus on the **Metric Label**. Use strong action words like "Faster Response" or "Sales Increase" to make your case study stand out in the listing.
                        </p>
                    </div>
                </div>
            </form>

            <style jsx global>{`
                .markdown-editor-wrapper .editor-toolbar {
                    border-color: rgba(255, 255, 255, 0.1);
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 8px 8px 0 0;
                    opacity: 1;
                }
                .markdown-editor-wrapper .editor-toolbar button {
                    color: rgba(255, 255, 255, 0.7) !important;
                }
                .markdown-editor-wrapper .editor-toolbar button:hover,
                .markdown-editor-wrapper .editor-toolbar button.active {
                    background: rgba(255, 255, 255, 0.1);
                    color: white !important;
                }
                .markdown-editor-wrapper .editor-toolbar i.separator {
                    border-left: 1px solid rgba(255, 255, 255, 0.1);
                    border-right: 1px solid rgba(255, 255, 255, 0.1);
                }
                .markdown-editor-wrapper .CodeMirror {
                    background: rgba(255, 255, 255, 0.02);
                    border-color: rgba(255, 255, 255, 0.1);
                    border-radius: 0 0 8px 8px;
                    color: rgba(255, 255, 255, 0.9);
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                    font-size: 0.875rem;
                    min-height: 300px;
                }
                .markdown-editor-wrapper .CodeMirror-cursor {
                    border-left: 1px solid white;
                }
                .markdown-editor-wrapper .CodeMirror-placeholder {
                    color: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </div>
    );
}
