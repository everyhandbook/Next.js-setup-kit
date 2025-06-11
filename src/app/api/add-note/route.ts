// src/app/api/add-note/route.ts
import { NextResponse } from 'next/server';
import sql from '@/lib/db'; // 이전 단계에서 만든 db.ts 파일

export async function POST(request: Request) {
  try {
    const { content } = await request.json(); // 클라이언트에서 보낸 note 내용

    if (!content) {
      return NextResponse.json({ message: 'Content is required' }, { status: 400 });
    }

    // 데이터베이스에 노트 추가
    await sql`INSERT INTO notes (content) VALUES (${content});`;

    return NextResponse.json({ message: 'Note added successfully' }, { status: 201 });
  } catch (error) { // <--- 여기에 여는 중괄호 { 추가
    console.error('Failed to add note:', error);
    return NextResponse.json({ message: 'Failed to add note' }, { status: 500 });
  } // <--- catch 블록의 닫는 중괄호 }
}