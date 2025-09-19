import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
//importando o service para ter acesso aos metodos
import { UsuariosService } from './usuarios.service';



@Controller('usuarios')
export class UsuariosController {

     // use o construtor para criar um objeto e ter acesso aos metodos
        constructor(private readonly projetosService: UsuariosService){}
    
        //endpoint listar todos
        @Get()
        getAll(){
            return this.projetosService.getAll();
        }
    
        // Exemplo de controller post
        @Post()
        create(@Body() body: any) {
            return this.projetosService.createUsuarios(body);
        }
    
        //endpoint atualizar
        @Put(":id")
        updateProjeto(@Param("id") id: string, @Body() data: any) {
            return this.projetosService.updateUsuarios(id, data);
        }
    
        //endpoint deletar um registro do banco
        @Delete(':id')
        deletarProjeto(@Param('id') id: string){
            return this.projetosService.deletarUsuarios(id);}
    
        //endpoint buscar por um ID
         @Get(":id")
         findProjeto(@Param("id") id: string) {
            return this.projetosService.findUsuarios(id);
        }
    
        //endpoint buscar por texto
         @Get("find/:txtBusca")
        getFindProjeto(@Param("txtBusca") txtBusca: string) {
            return this.projetosService.getFindUsuarios(txtBusca);
      }
    

}
