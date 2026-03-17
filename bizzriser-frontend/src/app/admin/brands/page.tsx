"use client";

import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";
import { Trash2, Upload, Plus, Loader2 } from "lucide-react";

interface Brand {
    id: string;
    name: string;
    imageUrl: string;
    order: number;
}

export default function BrandsAdmin() {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [name, setName] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const token = typeof window !== "undefined" ? localStorage.getItem("admin_token") : null;
    const headers = { Authorization: `Bearer ${token}` };

    const loadBrands = async () => {
        setLoading(true);
        try {
            const data = await fetchApi("/brands", { headers });
            setBrands(data);
        } catch (error) {
            console.error("Failed to load brands", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadBrands();
    }, []);

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file || !name) return;

        setUploading(true);
        try {
            // 1. Upload image
            const formData = new FormData();
            formData.append("file", file);

            const uploadRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/upload/image`, {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
                body: formData,
            });

            if (!uploadRes.ok) throw new Error("Upload failed");
            const { url } = await uploadRes.json();

            // 2. Create brand
            await fetchApi("/brands", {
                method: "POST",
                headers: { ...headers, "Content-Type": "application/json" },
                body: JSON.stringify({ name, imageUrl: url }),
            });

            setName("");
            setFile(null);
            // Reset file input
            const fileInput = document.getElementById("brand-file") as HTMLInputElement;
            if (fileInput) fileInput.value = "";

            await loadBrands();
        } catch (error) {
            alert("Failed to upload brand");
            console.error(error);
        }
        setUploading(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this brand?")) return;

        try {
            await fetchApi(`/brands/${id}`, {
                method: "DELETE",
                headers,
            });
            await loadBrands();
        } catch (error) {
            alert("Failed to delete brand");
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">Brand Management</h2>
                    <p className="text-white/40 text-sm mt-1">Manage partner logos for the infinite scroll section.</p>
                </div>
            </div>

            {/* Upload Form */}
            <div className="bg-[#1a1d26] border border-white/5 rounded-3xl p-8 shadow-xl">
                <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20 px-1">Brand Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Meta, Google, Suzlon"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-bizz-primary/50 transition-all placeholder:text-white/10"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/20 px-1">Logo Image</label>
                        <div className="relative group">
                            <input
                                id="brand-file"
                                type="file"
                                accept="image/*"
                                required
                                onChange={(e) => setFile(e.target.files?.[0] || null)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <div className="w-full bg-white/5 border border-dashed border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white/40 flex items-center gap-3 group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all">
                                <Upload size={16} />
                                <span className="truncate">{file ? file.name : "Select transparent PNG"}</span>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={uploading || !file || !name}
                        className="h-[52px] bg-bizz-primary hover:bg-bizz-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-black font-black uppercase tracking-widest text-[11px] rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-bizz-primary/20"
                    >
                        {uploading ? <Loader2 className="animate-spin" size={18} /> : <Plus size={18} />}
                        {uploading ? "Uploading..." : "Add Brand"}
                    </button>
                </form>
            </div>

            {/* Brand List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {loading ? (
                    Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="aspect-square bg-white/5 rounded-3xl animate-pulse border border-white/5" />
                    ))
                ) : brands.length === 0 ? (
                    <div className="col-span-full py-20 text-center bg-white/5 rounded-3xl border border-dashed border-white/10">
                        <div className="text-white/20 font-medium italic">No brands added yet</div>
                    </div>
                ) : (
                    brands.map((brand) => (
                        <div
                            key={brand.id}
                            className="group relative bg-[#1a1d26] border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 hover:border-bizz-primary/30 transition-all hover:shadow-2xl hover:shadow-bizz-primary/5 active:scale-95 duration-300"
                        >
                            <div className="relative w-full aspect-video flex items-center justify-center p-2">
                                <img
                                    src={brand.imageUrl}
                                    alt={brand.name}
                                    className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-[11px] font-bold text-white/40 group-hover:text-white transition-colors truncate px-2">{brand.name}</p>
                            </div>

                            <button
                                onClick={() => handleDelete(brand.id)}
                                className="absolute top-3 right-3 p-2 rounded-xl bg-red-500/10 text-red-500 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white"
                                title="Delete Brand"
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
