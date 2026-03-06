export class CreateBlogDto {
    title!: string;
    slug!: string;
    excerpt!: string;
    content!: string;
    category!: string;
    author!: string;
    imageUrl?: string;
    tags?: string[];         // Array of tag strings
    readTime?: number;       // Minutes to read
    featured?: boolean;      // Show in featured banner
    published?: boolean;
    // SEO
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;   // Comma-separated
}
