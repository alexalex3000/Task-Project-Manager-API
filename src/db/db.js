import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import dotenv from "dotenv";
dotenv.config();
const connection = process.env.DATABASE_URL;
if (!connection) {
    throw new Error('Missing DATABASE_URL in .env file');
}
const globalForOb = globalThis;
export const client = globalForOb.client ?? postgres(connection, {
    max: process.env.NODE_ENV === "production" ? 1 : 10,
    idle_timeout: 30,
    connect_timeout: 5000,
});
if (process.env.NODE_ENV === "development") {
    globalForOb.client = client;
}
export const db = drizzle(client, { schema });
