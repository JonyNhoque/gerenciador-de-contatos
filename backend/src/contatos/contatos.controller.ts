import { 
  Controller,
  Post,
  Body,
  Get,
  Param
} from '@nestjs/common';
import { ContatosService } from './contatos.service';
import { CreateContatoDto } from './dto/criar-contato.dto';

@Controller('contatos')
export class ContatosController {
  constructor(
    private readonly contatosService: ContatosService
  ){}

  @Post()
  async create( 
    @Body() createContatoDto: CreateContatoDto
  ){
    const id = await this.contatosService.create(createContatoDto);
    return {id: id}
  };

  @Get()
  async findAll(): Promise<any> {
    return this.contatosService.findAll()
  }
}
