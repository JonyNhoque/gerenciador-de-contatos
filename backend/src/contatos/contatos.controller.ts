import { 
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete
} from '@nestjs/common';
import { ContatosService } from './contatos.service';
import { CreateContatoDto } from './dto/criar-contato.dto';
import { UpdateContatoDto } from './dto/atualizar-contato.dto';

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

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateContatoDto: UpdateContatoDto
  ): Promise<any> {
    return this.contatosService.update(id, updateContatoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.contatosService.remove(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return this.contatosService.findOne(id);
  }
}
