export class CreateCaseStudyDto {
    company!: string;
    industry!: string;
    slug!: string;
    goal!: string;
    metric!: string;
    metricLabel!: string;
    title!: string;
    excerpt!: string;
    content!: string;
    logoUrl?: string;
    bannerUrl?: string;
    published?: boolean;
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
}
