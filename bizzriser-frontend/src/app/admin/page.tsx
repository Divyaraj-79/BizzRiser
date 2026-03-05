"use client";

import { useEffect, useState } from "react";
import { Users, FileText, Briefcase, MessageSquare } from "lucide-react";

export default function AdminDashboardPage() {
    const [stats, setStats] = useState({
        blogs: 0,
        caseStudies: 0,
        leads: 0,
        contacts: 0
    });

    useEffect(() => {
        // In actual implementation, we'll fetch real stats from our backend
        setStats({
            blogs: 12,
            caseStudies: 5,
            leads: 34,
            contacts: 89
        });
    }, []);

    const statCards = [
        { label: "Total Blogs", value: stats.blogs, icon: FileText, color: "bg-blue-500" },
        { label: "Case Studies", value: stats.caseStudies, icon: Briefcase, color: "bg-purple-500" },
        { label: "New Leads", value: stats.leads, icon: Users, color: "bg-green-500" },
        { label: "Unread Contacts", value: stats.contacts, icon: MessageSquare, color: "bg-orange-500" },
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Dashboard</h1>
                <p className="text-gray-500 mt-2">Welcome to your BizzRiser Admin Panel.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.label} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
                                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
                                </div>
                                <div className={`${stat.color} p-3 rounded-lg text-white`}>
                                    <Icon size={24} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
