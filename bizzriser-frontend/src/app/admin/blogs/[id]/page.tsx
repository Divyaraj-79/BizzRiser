import { API_URL } from "@/lib/api";
import BlogEditorPage from "./BlogEditContent";

export async function generateStaticParams() {
    try {
        const response = await fetch(`${API_URL}/blogs`);
        const blogs = await response.json();
        const paths = blogs.map((blog: any) => ({
            id: blog.id,
        }));
        // Always include 'new' for creating new items
        paths.push({ id: "new" });
        return paths;
    } catch (error) {
        console.error("Error generating static params for admin blogs:", error);
        return [{ id: "new" }];
    }
}

export default function Page() {
    return <BlogEditorPage />;
}
