import { Document } from 'mongoose';
export declare class Contato extends Document {
    nome: string;
    endereco: string;
    telefone: string;
    email: string;
}
export declare const ContatoSchema: import("mongoose").Schema<Contato, import("mongoose").Model<Contato, any, any, any, Document<unknown, any, Contato> & Contato & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Contato, Document<unknown, {}, import("mongoose").FlatRecord<Contato>> & import("mongoose").FlatRecord<Contato> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
