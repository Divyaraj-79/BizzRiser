export class CreateBlogDto {
    title!: string;
    slug!: string;
    excerpt!: string;
    content!: string;
    category!: string;
    author!: string;
    imageUrl?: string;
    published?: boolean;
}
