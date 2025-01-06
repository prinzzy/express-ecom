import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

// PostgreSQL connection pool
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export { pool };
