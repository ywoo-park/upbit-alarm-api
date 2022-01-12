import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    development: {
        username: process.env.DATABASE_USERNAME || 'root',
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_SCHEMA || 'upbit_alarm',
        host: 'localhost',
        port: 3306,
        dialect: "mysql"
    },
    production: {
        username: process.env.DATABASE_USERNAME || 'root',
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_SCHEMA || 'upbit_alarm',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        dialect: "mysql"
    }
}