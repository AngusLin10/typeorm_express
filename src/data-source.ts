import "reflect-metadata"
import { DataSource } from "typeorm"
// import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: false,
    migrationsRun: true,
    logging: false,
    // entities: [User],
    entities: ["src/entity/*.ts"],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
