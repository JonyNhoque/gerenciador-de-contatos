import { Model } from 'mongoose';
import { Contato } from 'src/schemas/contato.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<Contato>);
    createUser(name: string, email: string, age: number): Promise<Contato>;
    findAllUsers(): Promise<User[]>;
}
