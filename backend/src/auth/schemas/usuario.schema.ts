import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
