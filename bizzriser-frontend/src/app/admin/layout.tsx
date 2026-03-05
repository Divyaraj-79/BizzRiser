"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, FileText, Briefcase, Mail, MessageSquare, LogOut, FileBadge } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Exclude sidebar from login page
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    const navItems = [
        { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { label: "Blogs", href: "/admin/blogs", icon: FileText },
        { label: "Case Studies", href: "/admin/case-studies", icon: Briefcase },
        { label: "Careers", href: "/admin/careers", icon: Users },
        { label: "Leads", href: "/admin/leads", icon: FileBadge },
        { label: "Contacts", href: "/admin/contacts", icon: MessageSquare },
        { label: "Newsletters", href: "/admin/newsletters", icon: Mail },
    ];

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col hidden md:flex">
                <div className="p-6 border-b dark:border-gray-700">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Admin Panel</h2>
                </div>
                <nav className="flex-1 overflow-y-auto py-4">
                    <ul className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-3 px-6 py-3 transition-colors ${isActive
                                                ? "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400 border-r-4 border-blue-600"
                                                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white"
                                            }`}
                                    >
                                        <Icon size={20} />
                                        <span className="font-medium">{item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="p-4 border-t dark:border-gray-700">
                    <button
                        onClick={() => {
                            localStorage.removeItem("admin_token");
                            window.location.href = "/admin/login";
                        }}
                        className="flex items-center gap-3 px-6 py-3 w-full text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors rounded-lg"
                    >
                        <LogOut size={20} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                <header className="bg-white dark:bg-gray-800 shadow-sm p-4 flex justify-between items-center md:hidden">
                    <h2 className="text-xl font-bold">Admin Panel</h2>
                </header>
                <div className="flex-1 overflow-y-auto p-4 md:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
