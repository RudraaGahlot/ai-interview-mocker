import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from "./schema"

config({ path: ".env" }); // or .env.local

const sql = neon(DATABASE_URl);
export const db = drizzle(sql, {schema} );
