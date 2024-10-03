import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContatoDto } from './dto/criar-contato.dto';
import { ContatoDocument } from './schemas/contato.schema';

@Injectable()
export class ContatosService {
  constructor(
    @InjectModel('Contato') 
    private readonly contatoModel: Model<ContatoDocument>
  ){}

  async create(createContatoDto: CreateContatoDto): Promise<ContatoDocument> {
    const contatoCriado = new this.contatoModel(createContatoDto);
    return await contatoCriado.save();
  };

  async findAll(): Promise<ContatoDocument[]> {
    return await this.contatoModel.find().exec();
  }
}
