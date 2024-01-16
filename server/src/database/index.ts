import "reflect-metadata"
import { DataSource } from "typeorm";
import entities from "./entities";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "TCC",
    synchronize: true,
    logging: false,
    entities,
    migrations: [],
    subscribers: [],
})