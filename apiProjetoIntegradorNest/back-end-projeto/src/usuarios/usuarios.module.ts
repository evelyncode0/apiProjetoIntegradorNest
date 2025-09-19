import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
//importando prisma module
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  //importar PrismaModule para o backend poder ter acesso
  //em todos modulos que deseja acesso ao banco deve ser adicionado o modulo prisma
  imports: [PrismaModule],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
