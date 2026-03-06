"use client";

import { useEffect, useState } from "react";
import { Users, FileText, Briefcase, MessageSquare, AlertCircle, Loader2 } from "lucide-react";
import { adminFetch } from "@/lib/admin-api";

export default function AdminDashboardPage() {
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);
                const data = await adminFetch("/analytics/dashboard");
                setStats(data);
                setError(null);
            } catch (err: any) {
                console.error("Failed to fetch dashboard stats:", err);
                setError(err.message || "Failed to load statistics");
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
                <Loader2 className="w-8 h-8 animate-spin text-bizz-primary" />
                <p className="text-white/40 animate-pulse font-medium">Synchronizing statistics...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
                <div className="p-4 rounded-full bg-red-500/10 text-red-500">
                    <AlertCircle className="w-10 h-10" />
                </div>
                <h2 className="text-xl font-bold text-white">Sync Failed</h2>
                <p className="text-white/40 max-w-sm text-center text-sm">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-2 px-6 py-2 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all shadow-lg active:scale-95"
                >
                    Retry Connection
                </button>
            </div>
        );
    }

    const statCards = [
        { label: "Total Blogs", value: stats?.totalBlogs ?? 0, icon: FileText, color: "bg-blue-500", shadow: "shadow-blue-500/20" },
        { label: "Case Studies", value: stats?.totalCaseStudies ?? 0, icon: Briefcase, color: "bg-purple-500", shadow: "shadow-purple-500/20" },
        { label: "New Leads", value: stats?.totalLeads ?? 0, icon: Users, color: "bg-green-500", shadow: "shadow-green-500/20" },
        { label: "Unread Contacts", value: stats?.unreadMessages ?? 0, icon: MessageSquare, color: "bg-orange-500", shadow: "shadow-orange-500/20" },
    ];

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">Dashboard</h1>
                <p className="text-white/40 font-medium">Welcome to your BizzRiser Admin Panel.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.label}
                            style={{ animationDelay: `${i * 100}ms` }}
                            className="glass-dark p-7 rounded-[2rem] border border-white/5 hover:border-white/10 hover:bg-white/[0.08] transition-all group relative overflow-hidden shadow-2xl"
                        >
                            <div className="flex items-center justify-between relative z-10">
                                <div>
                                    <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-2">{stat.label}</p>
                                    <p className="text-4xl font-black text-white tracking-tighter">{stat.value}</p>
                                </div>
                                <div className={`${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-2xl ${stat.shadow} group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon size={28} strokeWidth={2.5} />
                                </div>
                            </div>

                            {/* Suble Accent Glow */}
                            <div className={`absolute top-0 right-0 w-24 h-24 ${stat.color} opacity-[0.03] blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none`} />
                        </div>
                    );
                })}
            </div>

            {/* Additional Insights Section (Optional placeholder but makes it "prettier") */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
                <div className="lg:col-span-2 glass-dark rounded-[2.5rem] p-8 border border-white/5 h-80 flex flex-col justify-center items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                        <Loader2 className="w-8 h-8 text-white/20" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Analytics Visualization</h3>
                    <p className="text-white/30 text-sm max-w-xs">Detailed growth charts and visitor insights will appear here as more data is collected.</p>
                </div>

                <div className="glass-dark rounded-[2.5rem] p-8 border border-white/5 h-80">
                    <h3 className="text-lg font-bold text-white mb-6">Recent Activity</h3>
                    <div className="space-y-5">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                                    <Users size={18} className="text-white/40" />
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <div className="h-2 w-3/4 bg-white/10 rounded-full mb-2" />
                                    <div className="h-1.5 w-1/2 bg-white/5 rounded-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
