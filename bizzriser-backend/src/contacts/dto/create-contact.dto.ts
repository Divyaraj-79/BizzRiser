export class CreateContactDto {
    firstName!: string;
    lastName!: string;
    email!: string;
    company?: string;
    phone?: string;
    industry?: string;
    message!: string;
}
