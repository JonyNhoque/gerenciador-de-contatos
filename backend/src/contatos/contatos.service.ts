import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contato } from './contato.model';

@Injectable()
export class ContatosService {
  constructor(
    @InjectModel('Contato') 
    private readonly contatoModel: Model<Contato>
  ){}

  async create(nome: string, endereco: string, telefone: string, email: string): Promise<Contato> {
    const contatoCriado = new this.contatoModel({ nome, endereco, telefone, email });
    return await contatoCriado.save();
  };

  async findAll(): Promise<Contato[]> {
    return await this.contatoModel.find().exec();
  }
}
