import { PrismaService } from '../prisma/prisma.service';
export declare class UsuariosService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        UUID: string;
        id: number;
        nome_usuario: string;
        email_usuario: string;
        senha_cripto: string;
        tipo_usuario: string;
    }[]>;
    createUsuarios(data: any): Promise<{
        UUID: string;
        id: number;
        nome_usuario: string;
        email_usuario: string;
        senha_cripto: string;
        tipo_usuario: string;
    }>;
    deletarUsuarios(id: string): Promise<{
        UUID: string;
        id: number;
        nome_usuario: string;
        email_usuario: string;
        senha_cripto: string;
        tipo_usuario: string;
    }>;
    updateUsuarios(id: string, data: any): Promise<string | {
        UUID: string;
        id: number;
        nome_usuario: string;
        email_usuario: string;
        senha_cripto: string;
        tipo_usuario: string;
    }>;
    findUsuarios(id: string): Promise<{
        UUID: string;
        id: number;
        nome_usuario: string;
        email_usuario: string;
        senha_cripto: string;
        tipo_usuario: string;
    } | null>;
    getFindUsuarios(txtBusca: string): Promise<{
        UUID: string;
        id: number;
        nome_usuario: string;
        email_usuario: string;
        senha_cripto: string;
        tipo_usuario: string;
    }[]>;
}
