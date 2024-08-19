import Database from "better-sqlite3";
import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

const sqlite = new Database("./src/db/db.sqlite");
export const db: BetterSQLite3Database = drizzle(sqlite);
