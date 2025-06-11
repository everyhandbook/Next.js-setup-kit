// src/app/api/test-db/route.ts
import { NextResponse } from 'next/server';
import sql from '@/lib/db'; // 방금 만든 db.ts 파일을 가져옵니다. 경로 별칭(@)을 사용하거나 상대 경로를 사용하세요.

export async function GET() {
  try {
    // 간단한 쿼리를 실행하여 현재 시간을 가져옵니다.
    const result = await sql`SELECT NOW();`;
    return NextResponse.json({ time: result[0]?.now || 'Error fetching time' }, { status: 200 });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ message: 'Failed to connect to database or execute query' }, { status: 500 });
  }
}
