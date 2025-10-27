import path from 'path';
import dotenv from 'dotenv';
import { defineConfig, env } from 'prisma/config';

// Carrega variáveis de ambiente a partir do .env na raiz do projeto
// Antes de chamar env("DATABASE_URL") para evitar PrismaConfigEnvError.
dotenv.config({ path: path.resolve(__dirname, './.env') });

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  engine: 'classic',
  datasource: {
    url: env('DATABASE_URL'),
  },
});
