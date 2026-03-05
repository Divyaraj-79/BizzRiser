"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { adminFetch } from "@/lib/admin-api";

export default function BlogEditorPage() {
    const router = useRouter();
    const params = useParams();
    const isNew = params.id === "new";

    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        category: "",
        author: "",
        imageUrl: "",
        published: false,
    });

    useEffect(() => {
        if (!isNew) {
            // Temporary workaround: fetch all and find by ID instead of modifying backend slug logic
            adminFetch("/blogs?all=true")
                .then((blogs) => {
                    const blog = blogs.find((b: any) => b.id === params.id);
                    if (blog) {
                        setFormData({
                            title: blog.title || "",
                            slug: blog.slug || "",
                            excerpt: blog.excerpt || "",
                            content: blog.content || "",
                            category: blog.category || "",
                            author: blog.author || "",
                            imageUrl: blog.imageUrl || "",
                            published: blog.published || false,
                        });
                    }
                })
                .finally(() => setLoading(false));
        }
    }, [isNew, params.id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSlugify = () => {
        setFormData((prev) => ({
            ...prev,
            slug: prev.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""),
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            if (isNew) {
                await adminFetch("/blogs", {
                    method: "POST",
                    body: JSON.stringify(formData),
                });
            } else {
                await adminFetch(`/blogs/${params.id}`, {
                    method: "PATCH",
                    body: JSON.stringify(formData),
                });
            }
            router.push("/admin/blogs");
        } catch (err: any) {
            alert("Error saving blog: " + err.message);
            setSaving(false);
        }
    };

    if (loading) return <div className="p-8">Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center gap-4">
                <Link
                    href="/admin/blogs"
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-500"
                >
                    <ArrowLeft size={24} />
                </Link>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {isNew ? "Create New Blog" : "Edit Blog"}
                    </h1>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                        <input
                            type="text"
                            name="title"
                            required
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex justify-between">
                            <span>Slug</span>
                            <button type="button" onClick={handleSlugify} className="text-blue-600 hover:underline text-xs">Generate from Title</button>
                        </label>
                        <input
                            type="text"
                            name="slug"
                            required
                            value={formData.slug}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                        <input
                            type="text"
                            name="category"
                            required
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Author</label>
                        <input
                            type="text"
                            name="author"
                            required
                            value={formData.author}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Image URL</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        placeholder="https://example.com/image.png"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Excerpt</label>
                    <textarea
                        name="excerpt"
                        required
                        value={formData.excerpt}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Content (Markdown/HTML)</label>
                    <textarea
                        name="content"
                        required
                        value={formData.content}
                        onChange={handleChange}
                        rows={10}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white font-mono text-sm"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        id="published"
                        name="published"
                        checked={formData.published}
                        onChange={handleChange}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="published" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Publish this blog post immediately
                    </label>
                </div>

                <div className="pt-4 border-t dark:border-gray-700 flex justify-end gap-4">
                    <Link
                        href="/admin/blogs"
                        className="px-6 py-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 font-medium transition-colors"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={saving}
                        className="px-6 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-medium transition-colors flex items-center gap-2 disabled:opacity-50"
                    >
                        <Save size={18} />
                        <span>{saving ? "Saving..." : "Save Blog"}</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
