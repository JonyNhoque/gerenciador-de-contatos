import * as mongoose from 'mongoose';

export const ContatoSchema = new mongoose.Schema({
  nome: String,
  endereco: String,
  telefone: String,
  email: String
});

export interface Contato extends mongoose.Document {
  nome: string;
  endereco: string;
  telefone: string;
  email: string
}