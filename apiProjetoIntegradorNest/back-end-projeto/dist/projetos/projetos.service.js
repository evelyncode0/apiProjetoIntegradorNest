"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjetosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProjetosService = class ProjetosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.projetos.findMany();
    }
    async createProjeto(data) {
        console.log(data);
        const projeto = await this.prisma.projetos.create({
            data: {
                nome_projeto: data.nome_projeto,
                membros_projeto: data.membros_projeto,
                turma_projeto: data.turma_projeto,
                data_apresentacao: data.data_apresentacao,
                convidados: data.convidados,
                detalhesConvidados: data.detalhesConvidados,
                observacoes: data.observacoes,
            },
        });
        return projeto;
    }
    async deletarProjeto(id) {
        const projetoId = parseInt(id, 10);
        return await this.prisma.projetos.delete({
            where: { id: projetoId },
        });
    }
    async updateProjetos(id, data) {
        const userId = parseInt(id, 10);
        if (isNaN(userId)) {
            const message = `${userId} - ID inválido`;
            console.log(message);
            return message;
        }
        console.log("Requisição para Editar o id:", id.toString());
        console.log("Dados recebidos para edição:");
        console.log(data);
        const existingUser = await this.prisma.projetos.findUnique({
            where: { id: userId },
        });
        if (!existingUser) {
            const message = `${userId} NÃO localizado no Banco de Dados`;
            console.log(message);
            return message;
        }
        const updatedUser = await this.prisma.projetos.update({
            where: { id: userId },
            data,
        });
        return updatedUser;
        console.log("Registro atualizado com sucesso");
    }
    async findProjeto(id) {
        const projetoId = parseInt(id, 10);
        console.log(projetoId);
        console.log("Abrindo Drawer para UserId:", projetoId);
        const existingUser = await this.prisma.projetos.findUnique({
            where: { id: projetoId },
        });
        return existingUser;
    }
    async getFindProjeto(txtBusca) {
        console.log("Buscando usuário pelo nome parecido com:", txtBusca);
        const users = await this.prisma.projetos.findMany({
            where: {
                turma_projeto: {
                    contains: txtBusca,
                },
            },
        });
        return users;
    }
};
exports.ProjetosService = ProjetosService;
exports.ProjetosService = ProjetosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProjetosService);
//# sourceMappingURL=projetos.service.js.map