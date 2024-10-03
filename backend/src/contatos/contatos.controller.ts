import { 
  Controller,
  Post,
  Body,
  Get,
  Param
} from '@nestjs/common';
import { ContatosService } from './contatos.service';

@Controller('contatos')
export class ContatosController {
  constructor(
    private readonly contatosService: ContatosService
  ){}

  @Post()
  async create( 
    @Body('nome') nome, 
    @Body('endereco') endereco,
    @Body('telefone') telefone,
    @Body('email') email
  ){
    const id = await this.contatosService.create(
      nome, endereco, telefone, email
    );

    return {id: id}
  };

  @Get()
  async findAll(): Promise<any> {
    return this.contatosService.findAll()
  }
}
