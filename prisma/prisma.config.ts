// ...existing code...
import path from 'path';
import dotenv from 'dotenv';
import { defineConfig } from '@prisma/sdk';

// carrega .env a partir da raiz do projeto (ajuste o path se necessário)
dotenv.config({ path: path.resolve(__dirname, '../.env') });

export default defineConfig({
  schema: './prisma/schema.prisma',
});
// ...existing code...
