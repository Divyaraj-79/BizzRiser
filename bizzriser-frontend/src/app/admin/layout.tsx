"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    LayoutDashboard, FileText, Briefcase, Mail, MessageSquare, LogOut,
    BarChart3, Bot, Star, Factory, DollarSign, Users, BookOpen,
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

    if (pathname === "/admin/login") return <>{children}</>;

    const handleLogout = () => {
        localStorage.removeItem("admin_token");
        router.push("/admin/login");
    };

    return (
        <div className="flex h-screen bg-[#0f1117] text-white font-sans">
            {/* Sidebar */}
            <aside className="w-64 shrink-0 bg-[#151820] border-r border-white/5 flex flex-col hidden md:flex">
                {/* Logo */}
                <div className="px-6 py-5 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">B</div>
                        <div>
                            <p className="font-bold text-white text-sm">BizzRiser</p>
                            <p className="text-xs text-white/40">Admin Panel</p>
                        </div>
                    </div>
                </div>

                {/* Nav */}
                <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
                    {NAV_SECTIONS.map((section) => (
                        <div key={section.label}>
                            <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/30">{section.label}</p>
                            <ul className="space-y-0.5">
                                {section.items.map((item) => {
                                    const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                                    const Icon = item.icon;
                                    return (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${isActive
                                                    ? "bg-green-500/15 text-green-400 font-semibold"
                                                    : "text-white/50 hover:text-white hover:bg-white/5"
                                                    }`}
                                            >
                                                <Icon size={16} />
                                                <span>{item.label}</span>
                                                {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-green-400" />}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </nav>

                {/* Logout */}
                <div className="p-3 border-t border-white/5">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-3 py-2.5 w-full text-red-400 hover:bg-red-500/10 transition-colors rounded-lg text-sm"
                    >
                        <LogOut size={16} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main */}
            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="px-6 py-4 border-b border-white/5 bg-[#151820] flex items-center justify-between shrink-0">
                    <h1 className="text-sm font-medium text-white/60">
                        {[...NAV_SECTIONS.flatMap(s => s.items)].find(i => pathname === i.href || (i.href !== "/admin" && pathname.startsWith(i.href)))?.label ?? "Admin"}
                    </h1>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-white/30">BizzRiser CMS</span>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                </header>
                <div className="flex-1 overflow-y-auto p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
