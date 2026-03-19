import { API_URL } from "@/lib/api";
import BlogContentPage from "./BlogContent";

export async function generateStaticParams() {
    const fallbacks = [
        { slug: "whatsapp-marketing-guide" },
        { slug: "customer-support-automation" },
        { slug: "lead-generation-tips" },
    ];

    try {
        const response = await fetch(`${API_URL}/blogs`);
        if (!response.ok) return fallbacks;
        const blogs = await response.json();
        const apiPaths = blogs.map((blog: any) => ({
            slug: blog.slug,
        }));

        const allPaths = [...fallbacks];
        apiPaths.forEach((p: any) => {
            if (!allPaths.some(fp => fp.slug === p.slug)) {
                allPaths.push(p);
            }
        });
        return allPaths;
    } catch (error) {
        console.error("Error generating static params for blogs:", error);
        return fallbacks;
    }
}

export default function Page() {
    return <BlogContentPage />;
}
