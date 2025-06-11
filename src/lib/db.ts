// src/lib/db.ts
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(process.env.DATABASE_URL!); // DATABASE_URL 환경 변수를 사용합니다.
// Tip: Drizzle ORM을 사용하고 싶다면 아래 주석을 해제하세요.
// const db = drizzle(sql);

export default sql;
// Tip: Drizzle ORM을 사용하고 싶다면 'sql' 대신 'db'를 export 하세요.
// export default db;