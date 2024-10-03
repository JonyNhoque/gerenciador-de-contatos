// src/contatos/schemas/contato.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContatoDocument = Contato & Document;

@Schema()
export class Contato {
  @Prop({ required: true })
  nome: string;

  @Prop()
  endereco: string;

  @Prop()
  telefone: string;

  @Prop({ required: true })
  email: string;
}

export const ContatoSchema = SchemaFactory.createForClass(Contato);
