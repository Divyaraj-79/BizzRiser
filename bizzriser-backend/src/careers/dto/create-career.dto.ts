export class CreateCareerDto {
    title!: string;
    department!: string;
    location!: string;
    type!: string;
    description!: string;
    active?: boolean;
}
