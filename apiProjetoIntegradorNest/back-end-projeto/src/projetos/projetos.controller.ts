import { Controller, Get, Post, Delete, Put, Param, Body} from '@nestjs/common';
//importando o service para ter acesso aos metodos
import { ProjetosService } from './projetos.service';
import { CreateProjetoDto } from './dto/createProjeto.dto';

@Controller('projetos')
export class ProjetosController {
    // use o construtor para criar um objeto e ter acesso aos metodos
    constructor(private readonly projetosService: ProjetosService){}

    //endpoint listar todos
    @Get()
    getAll(){
        return this.projetosService.getAll();
    }

    // Exemplo de controller post
    @Post()
    create(@Body() body: any) {
        return this.projetosService.createProjeto(body);
    }

    //endpoint atualizar
    @Put(":id")
    updateProjeto(@Param("id") id: string, @Body() data: any) {
        return this.projetosService.updateProjetos(id, data);
    }

    //endpoint deletar um registro do banco
    @Delete(':id')
    deletarProjeto(@Param('id') id: string){
        return this.projetosService.deletarProjeto(id);}

    //endpoint buscar por um ID
     @Get(":id")
     findProjeto(@Param("id") id: string) {
        return this.projetosService.findProjeto(id);
    }

    //endpoint buscar por texto
     @Get("find/:txtBusca")
    getFindProjeto(@Param("txtBusca") txtBusca: string) {
        return this.projetosService.getFindProjeto(txtBusca);
  }

}
