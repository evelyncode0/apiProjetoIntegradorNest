"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        exceptionFactory: (errors) => {
            const formattedErrors = errors.map((err) => ({
                field: err.property,
                errors: Object.values(err.constraints || {}),
            }));
            return new common_1.BadRequestException({
                status: 400,
                message: "Erro de validação nos campos",
                errors: formattedErrors,
            });
        },
    }));
    app.enableCors({
        origin: "http://localhost:3030",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true,
    });
    await app.listen(3030);
    console.log("Rodando o BackEnd (API) na porta: 3030");
}
bootstrap();
//# sourceMappingURL=main.js.map