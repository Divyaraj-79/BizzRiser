"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("http://localhost:3001/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                throw new Error("Invalid credentials");
            }

            const data = await res.json();
            if (data.access_token) {
                localStorage.setItem("admin_token", data.access_token);
                router.push("/admin");
            } else {
                throw new Error("Invalid response format");
            }
        } catch (err: any) {
            setError(err.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f1117] py-12 px-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-bizz-primary/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full" />

            <div className="max-w-md w-full relative z-10 transition-all duration-700 animate-in fade-in slide-in-from-bottom-8">
                <div className="bg-[#151820] border border-white/5 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                    {/* Decorative Gradient Overlay */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-brand opacity-80" />

                    <div className="text-center mb-10">
                        <div className="inline-block relative mb-6">
                            <div className="absolute -inset-4 bg-bizz-primary/10 blur-2xl rounded-full scale-110" />
                            <img
                                src="/logolight.png"
                                alt="BizzRiser"
                                className="h-14 w-auto object-contain relative drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] mx-auto"
                            />
                        </div>
                        <h2 className="text-2xl font-black text-white tracking-tight mb-2">Partner Portal</h2>
                        <p className="text-white/40 text-sm font-medium uppercase tracking-widest">Secure Admin Access</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-[10px] font-black text-white/20 uppercase tracking-widest mb-2 ml-4">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-6 py-4 bg-[#1a1d26] border border-white/5 rounded-2xl text-white placeholder-white/10 focus:outline-none focus:ring-2 focus:ring-bizz-primary/50 focus:border-bizz-primary/30 transition-all"
                                    placeholder="admin@bizzriser.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-white/20 uppercase tracking-widest mb-2 ml-4">Access Secret</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full px-6 py-4 bg-[#1a1d26] border border-white/5 rounded-2xl text-white placeholder-white/10 focus:outline-none focus:ring-2 focus:ring-bizz-primary/50 focus:border-bizz-primary/30 transition-all"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-xl text-red-400 text-xs font-bold text-center">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-14 bg-gradient-brand text-white text-sm font-black uppercase tracking-widest rounded-2xl shadow-[0_10px_20px_-10px_rgba(45,198,83,0.4)] hover:shadow-[0_15px_30px_-10px_rgba(45,198,83,0.5)] transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:translate-y-0"
                        >
                            {loading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span>Verifying...</span>
                                </div>
                            ) : "Enter Dashboard"}
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <p className="text-[10px] font-bold text-white/10 uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                            <span className="w-8 h-px bg-white/5" />
                            Authorized Users Only
                            <span className="w-8 h-px bg-white/5" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
