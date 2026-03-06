"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Star, Eye, EyeOff } from "lucide-react";
import { adminFetch } from "@/lib/admin-api";

export default function AdminBlogsPage() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchBlogs = async () => {
        try {
            const data = await adminFetch("/blogs?all=true");
            setBlogs(data);
        } catch (e) {
            console.error("Error fetching blogs", e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchBlogs(); }, []);

    const handleDelete = async (id: string, title: string) => {
        if (confirm(`Delete "${title}"? This cannot be undone.`)) {
            try {
                await adminFetch(`/blogs/${id}`, { method: "DELETE" });
                setBlogs(blogs.filter((b) => b.id !== id));
            } catch (e) {
                alert("Failed to delete blog: " + e);
            }
        }
    };

    const togglePublish = async (blog: any) => {
        try {
            const updated = await adminFetch(`/blogs/${blog.id}`, {
                method: "PATCH",
                body: JSON.stringify({ published: !blog.published }),
            });
            setBlogs(prev => prev.map(b => b.id === blog.id ? { ...b, published: updated.published } : b));
        } catch (e) {
            alert("Failed to update: " + e);
        }
    };

    const toggleFeatured = async (blog: any) => {
        try {
            const updated = await adminFetch(`/blogs/${blog.id}`, {
                method: "PATCH",
                body: JSON.stringify({ featured: !blog.featured }),
            });
            setBlogs(prev => prev.map(b => b.id === blog.id ? { ...b, featured: updated.featured } : b));
        } catch (e) {
            alert("Failed to update: " + e);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-white">Blogs Management</h2>
                    <p className="text-sm text-white/40 mt-1">Create, edit, and manage blog posts with full SEO control.</p>
                </div>
                <Link
                    href="/admin/blogs/new"
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg text-sm transition"
                >
                    <Plus size={16} />
                    New Blog
                </Link>
            </div>

            {/* Table */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                {loading ? (
                    <div className="p-10 text-center text-white/30 text-sm">Loading…</div>
                ) : blogs.length === 0 ? (
                    <div className="p-10 text-center text-white/30 text-sm">
                        No blogs yet. <Link href="/admin/blogs/new" className="text-green-400 hover:text-green-300">Create your first one →</Link>
                    </div>
                ) : (
                    <table className="w-full text-sm">
                        <thead className="border-b border-white/10 bg-white/3">
                            <tr>
                                <th className="px-5 py-3 text-left text-xs text-white/40 font-medium w-1/3">Title</th>
                                <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Category</th>
                                <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Author</th>
                                <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Tags</th>
                                <th className="px-5 py-3 text-left text-xs text-white/40 font-medium">Status</th>
                                <th className="px-5 py-3 text-right text-xs text-white/40 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {blogs.map(blog => {
                                const tags = typeof blog.tags === "string" ? JSON.parse(blog.tags) : (blog.tags ?? []);
                                return (
                                    <tr key={blog.id} className="hover:bg-white/3 transition">
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-2">
                                                {blog.featured && <Star size={12} className="text-yellow-400 shrink-0" />}
                                                <div>
                                                    <p className="font-semibold text-white line-clamp-1">{blog.title}</p>
                                                    <p className="text-xs text-white/30 mt-0.5">/blogs/{blog.slug}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className="px-2 py-0.5 rounded-full bg-white/10 text-xs text-white/70">{blog.category}</span>
                                        </td>
                                        <td className="px-5 py-4 text-white/60">{blog.author}</td>
                                        <td className="px-5 py-4">
                                            <div className="flex flex-wrap gap-1">
                                                {tags.slice(0, 2).map((t: string) => (
                                                    <span key={t} className="px-1.5 py-0.5 rounded text-[10px] bg-green-500/10 text-green-400 border border-green-500/20">{t}</span>
                                                ))}
                                                {tags.length > 2 && <span className="text-[10px] text-white/30">+{tags.length - 2}</span>}
                                            </div>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${blog.published ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                                                {blog.published ? "Published" : "Draft"}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3 justify-end">
                                                <button onClick={() => toggleFeatured(blog)} title={blog.featured ? "Remove from featured" : "Mark as featured"} className={`text-xs transition ${blog.featured ? "text-yellow-400 hover:text-yellow-300" : "text-white/30 hover:text-yellow-400"}`}>
                                                    <Star size={15} />
                                                </button>
                                                <button onClick={() => togglePublish(blog)} title={blog.published ? "Unpublish" : "Publish"} className="text-white/30 hover:text-green-400 transition">
                                                    {blog.published ? <EyeOff size={15} /> : <Eye size={15} />}
                                                </button>
                                                <Link href={`/admin/blogs/${blog.id}`} className="text-white/30 hover:text-white transition">
                                                    <Edit size={15} />
                                                </Link>
                                                <button onClick={() => handleDelete(blog.id, blog.title)} className="text-white/30 hover:text-red-400 transition">
                                                    <Trash2 size={15} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
