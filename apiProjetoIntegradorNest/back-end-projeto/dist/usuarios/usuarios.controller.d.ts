import { UsuariosService } from './usuarios.service';
export declare class UsuariosController {
    private readonly projetosService;
    constructor(projetosService: UsuariosService);
    getAll(): Promise<{
        UUID: string;
        id: number;
        nome_usuario: string;
        email_usuario: string;
        senha_cripto: string;
        tipo_usuario: string;
    }[]>;
    create(body: any): Promise<{
        UUID: string;
        id: number;
        nome_usuario: string;
        email_usuario: string;
        senha_cripto: string;
        tipo_usuario: string;
    }>;
    updateProjeto(id: string, data: any): Promise<string | {
        UUID: string;
        id: number;
        nome_usuario: string;
        email_usuario: string;
        senha_cripto: string;
        tipo_usuario: string;
    }>;
    deletarProjeto(id: string): Promise<{
        UUID: string;
        id: number;
        nome_usuario: string;
        email_usuario: string;
        senha_cripto: string;
        tipo_usuario: string;
    }>;
    findProjeto(id: string): Promise<{
        UUID: string;
        id: number;
        nome_usuario: string;
        email_usuario: string;
        senha_cripto: string;
        tipo_usuario: string;
    } | null>;
    getFindProjeto(txtBusca: string): Promise<{
        UUID: string;
        id: number;
        nome_usuario: string;
        email_usuario: string;
        senha_cripto: string;
        tipo_usuario: string;
    }[]>;
}
