import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from "./schema"

config({ path: ".env" }); // or .env.local

const sql = neon("postgresql://neondb_owner:TJ63PDXMlOCA@ep-divine-snow-a5airy6w.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require");
export const db = drizzle(sql, {schema} );
