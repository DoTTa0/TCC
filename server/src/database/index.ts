import "reflect-metadata"
import { DataSource } from "typeorm";
import entities from "./entities";
import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = process.env.ENV === 'prod' ? 
new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: false,
    entities,
    migrations: [],
    subscribers: [],
})
:
new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: false,
    entities,
    migrations: [],
    subscribers: [],
})