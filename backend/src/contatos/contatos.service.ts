import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContatoDto } from './dto/criar-contato.dto';
import { UpdateContatoDto } from './dto/atualizar-contato.dto';
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

  async findOne(id: string): Promise<ContatoDocument> {
    const contato = await this.contatoModel.findById(id).exec();
  
    if (!contato) {
      throw new NotFoundException(`Contato com ID ${id} não encontrado`);
    }
  
    return contato;
  }

  async update(id: string, updateContatoDto: UpdateContatoDto): Promise<ContatoDocument> {
    const contatoAtualizado = await this.contatoModel.findByIdAndUpdate(
      id,
      updateContatoDto,
      { new: true }  // Retorna o contato atualizado
    ).exec();

    if (!contatoAtualizado) {
      throw new NotFoundException(`Contato com ID ${id} não encontrado`);
    }

    return contatoAtualizado;
  }

  async remove(id: string): Promise<ContatoDocument> {
    const contatoRemovido = await this.contatoModel.findByIdAndDelete(id).exec();
  
    if (!contatoRemovido) {
      throw new NotFoundException(`Contato com ID ${id} não encontrado`);
    }
  
    return contatoRemovido;
  }
}
