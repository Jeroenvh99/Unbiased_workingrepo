import { IsNotEmpty } from "class-validator";

export class CreateCreateDto{
    @IsNotEmpty()
    company_name: string;
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    job: string;
}
