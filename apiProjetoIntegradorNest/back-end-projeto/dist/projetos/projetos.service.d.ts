import { PrismaService } from '../prisma/prisma.service';
export declare class ProjetosService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        UUID: string;
        id: number;
        nome_projeto: string;
        membros_projeto: string;
        turma_projeto: string;
        data_criacao: Date;
        data_apresentacao: string;
        convidados: boolean;
        observacoes: string;
        status_projeto: string;
        updateAt: Date;
    }[]>;
    createProjeto(data: any): Promise<{
        UUID: string;
        id: number;
        nome_projeto: string;
        membros_projeto: string;
        turma_projeto: string;
        data_criacao: Date;
        data_apresentacao: string;
        convidados: boolean;
        observacoes: string;
        status_projeto: string;
        updateAt: Date;
    }>;
    deletarProjeto(id: string): Promise<{
        UUID: string;
        id: number;
        nome_projeto: string;
        membros_projeto: string;
        turma_projeto: string;
        data_criacao: Date;
        data_apresentacao: string;
        convidados: boolean;
        observacoes: string;
        status_projeto: string;
        updateAt: Date;
    }>;
    updateProjetos(id: string, data: any): Promise<string | {
        UUID: string;
        id: number;
        nome_projeto: string;
        membros_projeto: string;
        turma_projeto: string;
        data_criacao: Date;
        data_apresentacao: string;
        convidados: boolean;
        observacoes: string;
        status_projeto: string;
        updateAt: Date;
    }>;
    findProjeto(id: string): Promise<{
        UUID: string;
        id: number;
        nome_projeto: string;
        membros_projeto: string;
        turma_projeto: string;
        data_criacao: Date;
        data_apresentacao: string;
        convidados: boolean;
        observacoes: string;
        status_projeto: string;
        updateAt: Date;
    } | null>;
    getFindProjeto(txtBusca: string): Promise<{
        UUID: string;
        id: number;
        nome_projeto: string;
        membros_projeto: string;
        turma_projeto: string;
        data_criacao: Date;
        data_apresentacao: string;
        convidados: boolean;
        observacoes: string;
        status_projeto: string;
        updateAt: Date;
    }[]>;
}
