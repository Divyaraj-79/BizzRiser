"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2 } from "lucide-react";
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

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleDelete = async (id: string, title: string) => {
        if (confirm(`Are you sure you want to delete "${title}"?`)) {
            try {
                await adminFetch(`/blogs/${id}`, { method: "DELETE" });
                setBlogs(blogs.filter((b) => b.id !== id));
            } catch (e) {
                alert("Failed to delete blog: " + e);
            }
        }
    };

    if (loading) return <div className="p-8">Loading blogs...</div>;

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Blogs Management</h1>
                    <p className="text-gray-500 mt-2">Create, edit, and manage blog posts.</p>
                </div>
                <Link
                    href="/admin/blogs/new"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm"
                >
                    <Plus size={20} />
                    <span>New Blog</span>
                </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                            <tr>
                                <th className="px-6 py-4 font-medium">Title</th>
                                <th className="px-6 py-4 font-medium">Category</th>
                                <th className="px-6 py-4 font-medium">Author</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {blogs.map((blog) => (
                                <tr key={blog.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/25 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900 dark:text-white">{blog.title}</p>
                                        <p className="text-sm text-gray-500">{blog.slug}</p>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                        <span className="bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-full text-xs font-medium">
                                            {blog.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{blog.author}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-2.5 py-1 rounded-full text-xs font-medium ${blog.published
                                                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                                                }`}
                                        >
                                            {blog.published ? "Published" : "Draft"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right space-x-3">
                                        <Link
                                            href={`/admin/blogs/${blog.id}`}
                                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors inline-block"
                                        >
                                            <Edit size={18} />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(blog.id, blog.title)}
                                            className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors inline-block"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {blogs.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                        No blogs found. Create your first blog to get started.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
