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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsuariosService = class UsuariosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.usuarios.findMany();
    }
    async createUsuarios(data) {
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
    async deletarUsuarios(id) {
        const projetoId = parseInt(id, 10);
        return await this.prisma.usuarios.delete({
            where: { id: projetoId },
        });
    }
    async updateUsuarios(id, data) {
        const userId = parseInt(id, 10);
        if (isNaN(userId)) {
            const message = `${userId} - ID inválido`;
            console.log(message);
            return message;
        }
        console.log("Requisição para Editar o id:", id.toString());
        console.log("Dados recebidos para edição:");
        console.log(data);
        const existingUser = await this.prisma.usuarios.findUnique({
            where: { id: userId },
        });
        if (!existingUser) {
            const message = `${userId} NÃO localizado no Banco de Dados`;
            console.log(message);
            return message;
        }
        const updatedUser = await this.prisma.usuarios.update({
            where: { id: userId },
            data,
        });
        return updatedUser;
    }
    async findUsuarios(id) {
        const projetoId = parseInt(id, 10);
        console.log(projetoId);
        console.log("Abrindo Drawer para UserId:", projetoId);
        const existingUser = await this.prisma.usuarios.findUnique({
            where: { id: projetoId },
        });
        return existingUser;
    }
    async getFindUsuarios(txtBusca) {
        console.log("Buscando usuário pelo nome parecido com:", txtBusca);
        const users = await this.prisma.usuarios.findMany({
            where: {
                nome_usuario: {
                    contains: txtBusca,
                },
            },
        });
        return users;
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map