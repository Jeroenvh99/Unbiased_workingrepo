import { Injectable } from '@nestjs/common';
import { Create } from './creates.model';
import { CreateCreateDto } from './dto/create-create.dto';

@Injectable()
export class CreatesService {
    private creates: Create[] = [];

    createCreate(createCreateDto: CreateCreateDto): Create {
        const { company_name, job, email} = createCreateDto;

        const create: Create = {
            company_name,
            job,
            email,
        };
        this.creates.push();

        return create;
    }
}
