// src/config/env.ts
import * as dotenv from 'dotenv';
import * as path from 'path';
console.log('ENV loaded from:', path.resolve(__dirname, './.env'));

dotenv.config({ path: path.resolve(__dirname, './.env') });
console.log(process.env.API_KEY);
export const API_KEY = process.env.API_KEY;
