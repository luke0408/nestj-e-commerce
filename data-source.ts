import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

const NODE_ENV = process.env.NODE_ENV;

export default new DataSource({
    type: 'mysql',
    host: process.env[`${NODE_ENV}_DB_HOST`] as string ,
    port: Number(process.env[`${NODE_ENV}_DB_PORT`]) as number,
    username: process.env[`${NODE_ENV}_DB_USERNAME`] as string,
    password: process.env[`${NODE_ENV}_DB_PASSWORD`] as string,
    database: process.env[`${NODE_ENV}_DB_DATABASE`] as string,
    entities: [
        path.join(__dirname, './src/entities/*.entity.ts'),
        path.join(__dirname, './src/entities/*.entity.js'),
    ],
    synchronize: false,
    logging: true,
})