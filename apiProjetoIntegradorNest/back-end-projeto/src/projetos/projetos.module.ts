import { Module } from '@nestjs/common';
import { ProjetosController } from './projetos.controller';
import { ProjetosService } from './projetos.service';
//importando prismamodule
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  //importar PrismaModule para o backend poder ter acesso
  //em todos modulos que deseja acesso ao banco deve ser adicionado o modulo prisma
  imports: [PrismaModule],
  controllers: [ProjetosController],
  providers: [ProjetosService]
})
export class ProjetosModule {}
