// ...existing code...
import path from 'path';
import dotenv from 'dotenv';

// carrega .env a partir da raiz do projeto (ajuste o path se necessário)
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Algumas versões do pacote @prisma/sdk não exportam `defineConfig`.
// Para evitar erro em tempo de compilação/execução, exportamos um
// objeto simples com a configuração esperada pelo Prisma.
// Se você atualizar para uma versão do Prisma que fornece `defineConfig`,
// pode restaurar o uso original.
const prismaConfig = {
  schema: './prisma/schema.prisma',
};

export default prismaConfig;
// ...existing code...
