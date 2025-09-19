import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsuariosService {

     //adicionar o prisma para interagir com o banco de dados
    constructor(private prisma: PrismaService){}
    
    //metodo getAll
    async getAll(){
        //retorna todos os registros da tabela
        return this.prisma.usuarios.findMany();
    }

    //metodo post
    async createUsuarios(data: any){
        console.log(data);
        const usuario = await this.prisma.usuarios.create({
           data: {
                nome_usuario: data.nome_usuario,
                email_usuario: data.email_usuario,
                senha_cripto: data.senha_cripto,
                tipo_usuario: data.tipo_usuario
                
            },
        });
        return usuario;
    }
   
    
    //metodo deletar registro
    async deletarUsuarios(id: string){
        //parseInt("15", 10); // 15 -> decimal normal; pode assumir outros como 16 = hexadecimal
        const projetoId = parseInt(id, 10); //converte para número base decimal numeros normais

        return await this.prisma.usuarios.delete({
            where:{id: projetoId},
        });
    }

    //metodo editar registro
    async updateUsuarios(id: string, data: any) {
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
    const existingUser = await this.prisma.usuarios.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      const message = `${userId} NÃO localizado no Banco de Dados`;
      console.log(message);
      return message;
    }

    // Atualiza o registro
    const updatedUser = await this.prisma.usuarios.update({
      where: { id: userId },
      data,
    });

    return updatedUser; // retorna o registro atualizado em JSON
    }

    //Método Buscar Registro por ID
    async findUsuarios(id: string) {
    const projetoId = parseInt(id, 10);
    console.log(projetoId);
    console.log("Abrindo Drawer para UserId:", projetoId);
    // Localizando o Registro
    const existingUser = await this.prisma.usuarios.findUnique({
      where: { id: projetoId },
    });
    return existingUser;
  }

  // Método Buscar por TEXTO
  async getFindUsuarios(txtBusca: string) {
    console.log("Buscando usuário pelo nome parecido com:", txtBusca);

    const users = await this.prisma.usuarios.findMany({
      where: {
        nome_usuario: {
          contains: txtBusca, // equivalente ao LIKE '%texto%'
          
        },
      },
    });

    return users;
  }

}
