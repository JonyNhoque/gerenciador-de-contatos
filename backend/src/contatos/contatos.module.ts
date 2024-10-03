import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContatoSchema } from './contato.model';
import { ContatosController } from './contatos.controller';
import { ContatosService } from './contatos.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Contato', schema: ContatoSchema}])
  ],
  controllers: [
    ContatosController  
  ],
  providers: [
    ContatosService
  ]
})
export class ContatosModule {}