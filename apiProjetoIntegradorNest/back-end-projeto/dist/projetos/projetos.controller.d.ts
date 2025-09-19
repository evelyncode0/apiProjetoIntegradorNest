import { ProjetosService } from './projetos.service';
export declare class ProjetosController {
    private readonly projetosService;
    constructor(projetosService: ProjetosService);
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
    create(body: any): Promise<{
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
    updateProjeto(id: string, data: any): Promise<string | {
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
