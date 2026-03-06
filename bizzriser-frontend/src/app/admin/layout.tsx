"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
    LayoutDashboard, FileText, Briefcase, Mail, MessageSquare, LogOut,
    BarChart3, Bot, Star, Factory, DollarSign, Users, BookOpen, Menu,
} from "lucide-react";

const NAV_SECTIONS = [
    {
        label: "Content",
        items: [
            { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
            { label: "Blogs", href: "/admin/blogs", icon: BookOpen },
            { label: "Home Stats", href: "/admin/home-stats", icon: BarChart3 },
            { label: "Testimonials", href: "/admin/testimonials", icon: Star },
            { label: "Chatbot Flows", href: "/admin/industry-chatbots", icon: Bot },
            { label: "Solution Industries", href: "/admin/solution-industries", icon: Factory },
            { label: "Pricing Plans", href: "/admin/pricing-plans", icon: DollarSign },
        ],
    },
    {
        label: "CRM / Inbox",
        items: [
            { label: "Contact Inquiries", href: "/admin/contacts", icon: MessageSquare },
            { label: "Newsletter Subscribers", href: "/admin/newsletters", icon: Mail },
            { label: "Case Studies", href: "/admin/case-studies", icon: Briefcase },
            { label: "Careers", href: "/admin/careers", icon: Users },
        ],
    },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    if (pathname === "/admin/login") return <>{children}</>;

    const handleLogout = () => {
        localStorage.removeItem("admin_token");
        router.push("/admin/login");
    };

    return (
        <div className="flex h-screen bg-[#0f1117] text-white font-sans overflow-hidden">
            {/* Sidebar Overlay for Mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-72 bg-[#151820] border-r border-white/5 flex flex-col 
                transition-transform duration-300 ease-in-out md:relative md:translate-x-0
                ${isSidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}
            `}>
                {/* Logo */}
                <div className="px-6 py-10 border-b border-white/5 bg-[#1a1d26]/50 flex justify-center">
                    <Link href="/admin" className="flex flex-col items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-bizz-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src="/logolight.png"
                                alt="BizzRiser"
                                className="h-10 w-auto object-contain relative z-10 drop-shadow-[0_0_12px_rgba(45,198,83,0.2)] transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-[10px] font-black text-bizz-primary uppercase tracking-[0.4em] leading-none mb-1">Partner Portal</span>
                            <span className="text-[8px] font-bold text-white/10 uppercase tracking-[0.2em]">Automate. Convert. Scale.</span>
                        </div>
                    </Link>
                </div>

                {/* Nav */}
                <nav className="flex-1 overflow-y-auto py-8 px-4 space-y-9 custom-scrollbar">
                    {NAV_SECTIONS.map((section) => (
                        <div key={section.label}>
                            <p className="px-4 mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">{section.label}</p>
                            <ul className="space-y-1.5">
                                {section.items.map((item) => {
                                    const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                                    const Icon = item.icon;
                                    return (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsSidebarOpen(false)}
                                                className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-sm transition-all duration-200 group ${isActive
                                                    ? "bg-white/10 text-white font-bold shadow-sm"
                                                    : "text-white/40 hover:text-white hover:bg-white/[0.03]"
                                                    }`}
                                            >
                                                <Icon size={18} className={`${isActive ? "text-bizz-primary" : "text-white/20 group-hover:text-white/40"}`} />
                                                <span>{item.label}</span>
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="active-indicator"
                                                        className="ml-auto w-1.5 h-1.5 rounded-full bg-bizz-primary shadow-[0_0_10px_rgba(45,198,83,0.5)]"
                                                    />
                                                )}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </nav>

                {/* Logout */}
                <div className="p-4 border-t border-white/5 bg-[#1a1d26]/30">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3.5 px-4 py-3.5 w-full text-red-400/60 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 rounded-2xl text-sm font-bold group"
                    >
                        <LogOut size={18} className="opacity-50 group-hover:opacity-100" />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main */}
            <main className="flex-1 flex flex-col min-w-0 bg-[#0f1117] relative">
                <header className="h-20 px-8 border-b border-white/5 bg-[#151820]/80 backdrop-blur-xl flex items-center justify-between shrink-0 sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="p-2 -ml-2 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-colors md:hidden"
                        >
                            <Menu size={24} />
                        </button>
                        <h1 className="text-sm font-bold text-white/40 uppercase tracking-widest">
                            {[...NAV_SECTIONS.flatMap(s => s.items)].find(i => pathname === i.href || (i.href !== "/admin" && pathname.startsWith(i.href)))?.label ?? "Overview"}
                        </h1>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden sm:flex flex-col items-end">
                            <span className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-none mb-1">System Status</span>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-green-500/80 uppercase">All Systems Operational</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/20 font-bold hover:bg-white/10 hover:text-white/40 transition-colors cursor-pointer">
                            A
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </div>
            </main>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.1);
                }
            `}</style>
        </div>
    );
}
