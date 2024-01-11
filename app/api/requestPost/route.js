import { NextResponse } from 'next/server';
import { postDB } from '@/DB/postData.js';

export function GET() {
	console.log(postDB);
	return NextResponse.json({ result: postDB });
}
