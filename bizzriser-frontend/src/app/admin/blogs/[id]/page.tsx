"use client";

import { useState, useEffect, KeyboardEvent } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, X, Plus, Eye } from "lucide-react";
import { adminFetch } from "@/lib/admin-api";

const CATEGORIES = ["Marketing", "Sales", "Support", "E-Commerce", "Product", "News", "Education", "Technology"];

const INPUT = "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-green-500 transition";
const LABEL = "block text-xs text-white/50 mb-1.5 font-medium";
const SECTION = "bg-white/5 border border-white/10 rounded-xl p-5 space-y-4";

export default function BlogEditorPage() {
    const router = useRouter();
    const params = useParams();
    const isNew = params.id === "new";

    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);
    const [tagInput, setTagInput] = useState("");

    const [form, setForm] = useState({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        category: "",
        author: "",
        imageUrl: "",
        tags: [] as string[],
        readTime: "",
        featured: false,
        published: false,
        // SEO
        metaTitle: "",
        metaDescription: "",
        metaKeywords: "",
    });

    useEffect(() => {
        if (!isNew) {
            adminFetch(`/blogs/id/${params.id}`)
                .then((blog: any) => {
                    const tags = typeof blog.tags === "string" ? JSON.parse(blog.tags) : (blog.tags ?? []);
                    setForm({
                        title: blog.title || "",
                        slug: blog.slug || "",
                        excerpt: blog.excerpt || "",
                        content: blog.content || "",
                        category: blog.category || "",
                        author: blog.author || "",
                        imageUrl: blog.imageUrl || "",
                        tags,
                        readTime: blog.readTime ? String(blog.readTime) : "",
                        featured: blog.featured || false,
                        published: blog.published || false,
                        metaTitle: blog.metaTitle || "",
                        metaDescription: blog.metaDescription || "",
                        metaKeywords: blog.metaKeywords || "",
                    });
                })
                .catch(() => {
                    alert("Failed to load blog. Redirecting...");
                    router.push("/admin/blogs");
                })
                .finally(() => setLoading(false));
        }
    }, [isNew, params.id]);

    const set = (field: string, value: any) => setForm(p => ({ ...p, [field]: value }));

    const slugify = () => set("slug",
        form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")
    );

    const addTag = () => {
        const t = tagInput.trim();
        if (t && !form.tags.includes(t)) set("tags", [...form.tags, t]);
        setTagInput("");
    };

    const handleTagKey = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" || e.key === ",") { e.preventDefault(); addTag(); }
    };

    const removeTag = (tag: string) => set("tags", form.tags.filter(t => t !== tag));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            const body = {
                ...form,
                readTime: form.readTime ? parseInt(form.readTime) : undefined,
            };
            if (isNew) {
                await adminFetch("/blogs", { method: "POST", body: JSON.stringify(body) });
            } else {
                await adminFetch(`/blogs/${params.id}`, { method: "PATCH", body: JSON.stringify(body) });
            }
            router.push("/admin/blogs");
        } catch (err: any) {
            alert("Error saving blog: " + err.message);
            setSaving(false);
        }
    };

    if (loading) return <div className="p-8 text-white/40 text-sm">Loading…</div>;

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link href="/admin/blogs" className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h2 className="text-xl font-bold text-white">{isNew ? "New Blog Post" : "Edit Blog Post"}</h2>
                    <p className="text-xs text-white/40 mt-0.5">{isNew ? "Create and publish a new article" : `Editing: /blogs/${form.slug}`}</p>
                </div>
                <div className="ml-auto flex gap-3">
                    {/* Publish toggle */}
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
                    {/* Featured toggle */}
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                        <span className="text-sm text-white/60">Featured</span>
                        <div
                            onClick={() => set("featured", !form.featured)}
                            className={`relative w-11 h-6 rounded-full transition-colors ${form.featured ? "bg-yellow-500" : "bg-white/10"}`}
                        >
                            <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${form.featured ? "translate-x-5" : ""}`} />
                        </div>
                    </label>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* LEFT / MAIN CONTENT */}
                <div className="lg:col-span-2 space-y-5">

                    {/* Core fields */}
                    <div className={SECTION}>
                        <h3 className="text-sm font-semibold text-white">Post Details</h3>
                        <div>
                            <label className={LABEL}>Title *</label>
                            <input className={INPUT} value={form.title} onChange={e => set("title", e.target.value)} required placeholder="10 Ways WhatsApp Transforms Customer Support" />
                        </div>
                        <div className="flex gap-3 items-end">
                            <div className="flex-1">
                                <label className={LABEL}>URL Slug *</label>
                                <input className={INPUT} value={form.slug} onChange={e => set("slug", e.target.value)} required placeholder="10-whatsapp-customer-support-tips" />
                            </div>
                            <button type="button" onClick={slugify} className="px-3 py-2.5 text-xs text-green-400 border border-green-500/30 rounded-lg hover:bg-green-500/10 transition whitespace-nowrap">
                                ← Generate
                            </button>
                        </div>
                        <div>
                            <label className={LABEL}>Excerpt / Short Description *</label>
                            <textarea className={INPUT} value={form.excerpt} onChange={e => set("excerpt", e.target.value)} required rows={2} placeholder="A brief compelling summary (shown in blog cards)..." />
                        </div>
                    </div>

                    {/* Content editor */}
                    <div className={SECTION}>
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-semibold text-white">Content</h3>
                            <span className="text-xs text-white/30">Supports Markdown & HTML</span>
                        </div>
                        <textarea
                            className={`${INPUT} h-64 font-mono text-xs resize-y`}
                            value={form.content}
                            onChange={e => set("content", e.target.value)}
                            required
                            placeholder={`## Introduction\n\nStart writing your blog content here...\n\n## Key Takeaways\n\n- Point 1\n- Point 2`}
                        />
                    </div>

                    {/* SEO Section */}
                    <div className={SECTION}>
                        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                            <Eye size={14} className="text-green-400" />
                            SEO Settings
                        </h3>
                        <div>
                            <label className={LABEL}>Meta Title (for Google) — max 60 chars</label>
                            <input className={INPUT} value={form.metaTitle} onChange={e => set("metaTitle", e.target.value)} maxLength={60} placeholder="WhatsApp Customer Support Tips | BizzRiser" />
                            <p className="text-xs text-white/20 mt-1">{form.metaTitle.length}/60</p>
                        </div>
                        <div>
                            <label className={LABEL}>Meta Description — max 160 chars</label>
                            <textarea className={INPUT} value={form.metaDescription} onChange={e => set("metaDescription", e.target.value)} maxLength={160} rows={2} placeholder="Discover the top 10 ways WhatsApp Business API can transform your customer support..." />
                            <p className="text-xs text-white/20 mt-1">{form.metaDescription.length}/160</p>
                        </div>
                        <div>
                            <label className={LABEL}>Meta Keywords (comma-separated)</label>
                            <input className={INPUT} value={form.metaKeywords} onChange={e => set("metaKeywords", e.target.value)} placeholder="whatsapp automation, customer support, chatbot" />
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="space-y-5">

                    {/* Publish Settings */}
                    <div className={SECTION}>
                        <h3 className="text-sm font-semibold text-white">Publish</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className={LABEL}>Category *</label>
                                <select
                                    className={`${INPUT} cursor-pointer`}
                                    value={form.category}
                                    onChange={e => set("category", e.target.value)}
                                    required
                                >
                                    <option value="">Select…</option>
                                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className={LABEL}>Read Time (min)</label>
                                <input type="number" min="1" max="60" className={INPUT} value={form.readTime} onChange={e => set("readTime", e.target.value)} placeholder="5" />
                            </div>
                        </div>
                        <div>
                            <label className={LABEL}>Author Name *</label>
                            <input className={INPUT} value={form.author} onChange={e => set("author", e.target.value)} required placeholder="Sarah Jenkins" />
                        </div>
                    </div>

                    {/* Cover Image */}
                    <div className={SECTION}>
                        <h3 className="text-sm font-semibold text-white">Cover Image</h3>
                        <div>
                            <label className={LABEL}>Image URL</label>
                            <input className={INPUT} value={form.imageUrl} onChange={e => set("imageUrl", e.target.value)} placeholder="https://cdn.example.com/blog-image.jpg" />
                        </div>
                        {form.imageUrl && (
                            <div className="mt-2 rounded-lg overflow-hidden border border-white/10 h-32">
                                <img src={form.imageUrl} alt="Preview" className="w-full h-full object-cover" onError={(e: any) => e.target.style.display = "none"} />
                            </div>
                        )}
                        <p className="text-xs text-white/30">Paste a URL to an image hosted online, or use your CDN/storage.</p>
                    </div>

                    {/* Tags */}
                    <div className={SECTION}>
                        <h3 className="text-sm font-semibold text-white">Tags</h3>
                        <div className="flex gap-2">
                            <input
                                className={`${INPUT} flex-1`}
                                value={tagInput}
                                onChange={e => setTagInput(e.target.value)}
                                onKeyDown={handleTagKey}
                                placeholder="Add tag, press Enter"
                            />
                            <button type="button" onClick={addTag} className="px-3 py-2 text-xs bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg transition">
                                <Plus size={14} />
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {form.tags.map(tag => (
                                <span key={tag} className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs">
                                    {tag}
                                    <button type="button" onClick={() => removeTag(tag)} className="hover:text-red-400 transition">
                                        <X size={10} />
                                    </button>
                                </span>
                            ))}
                            {form.tags.length === 0 && <p className="text-xs text-white/20">No tags yet</p>}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3">
                        <button
                            type="submit"
                            disabled={saving}
                            className="w-full py-3 bg-green-500 hover:bg-green-400 disabled:opacity-50 text-black font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition"
                        >
                            <Save size={16} />
                            {saving ? "Saving…" : isNew ? "Publish Post" : "Save Changes"}
                        </button>
                        <Link href="/admin/blogs" className="w-full py-2.5 text-center text-sm text-white/40 hover:text-white border border-white/10 rounded-xl transition">
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
