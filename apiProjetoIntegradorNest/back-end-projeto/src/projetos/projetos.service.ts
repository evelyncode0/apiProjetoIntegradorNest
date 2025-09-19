import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjetoDto } from './dto/createProjeto.dto';

@Injectable()
export class ProjetosService {
    //adicionar o prisma para interagir com o banco de dados
    constructor(private prisma: PrismaService){}
    
    //metodo getAll
    async getAll(){
        //retorna todos os registros da tabela
        return this.prisma.projetos.findMany();
    }

    //metodo post
    async createProjeto(data: any){
        console.log(data);
        const projeto = await this.prisma.projetos.create({
           data: {
                nome_projeto: data.nome_projeto,
                membros_projeto: data.membros_projeto,
                turma_projeto: data.turma_projeto,
                data_apresentacao: data.data_apresentacao,
                convidados: data.convidados,
                observacoes: data.observacoes,
                
            },
        });
        return projeto;
    }
   
    
    //metodo deletar registro
    async deletarProjeto(id: string){
        //parseInt("15", 10); // 15 -> decimal normal; pode assumir outros como 16 = hexadecimal
        const projetoId = parseInt(id, 10); //converte para número base decimal numeros normais

        return await this.prisma.projetos.delete({
            where:{id: projetoId},
        });
    }

    //metodo editar registro
    async updateProjetos(id: string, data: any) {
    const userId = parseInt(id, 10);
    // Verifica se o id é um número válido
    if (isNaN(userId)) {
      const message = `${userId} - ID inválido`;
      console.log(message);
      return message;
    }
    console.log("Requisição para Editar o id:", id.toString());
    console.log("Dados recebidos para edição:");
    console.log(data);
    // Verifica se o registro existe
    const existingUser = await this.prisma.projetos.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      const message = `${userId} NÃO localizado no Banco de Dados`;
      console.log(message);
      return message;
    }

    // Atualiza o registro
    const updatedUser = await this.prisma.projetos.update({
      where: { id: userId },
      data,
    });

    return updatedUser; // retorna o registro atualizado em JSON
    }

    //Método Buscar Registro por ID
    async findProjeto(id: string) {
    const projetoId = parseInt(id, 10);
    console.log(projetoId);
    console.log("Abrindo Drawer para UserId:", projetoId);
    // Localizando o Registro
    const existingUser = await this.prisma.projetos.findUnique({
      where: { id: projetoId },
    });
    return existingUser;
  }

  // Método Buscar por TEXTO
  async getFindProjeto(txtBusca: string) {
    console.log("Buscando usuário pelo nome parecido com:", txtBusca);

    const users = await this.prisma.projetos.findMany({
      where: {
        turma_projeto: {
          contains: txtBusca, // equivalente ao LIKE '%texto%'
        },
      },
    });

    return users;
  }
}
