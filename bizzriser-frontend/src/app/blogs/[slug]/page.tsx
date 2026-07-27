import { blogs } from "@/lib/static-data";
import BlogContentPage from "./BlogContent";

export function generateStaticParams() {
    if (blogs.length === 0) return [{ slug: "example-post" }];
    return blogs.map((blog: any) => ({
        slug: blog.slug,
    }));
}

export default function Page() {
    return <BlogContentPage />;
}
