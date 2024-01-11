import { NextResponse } from 'next/server';
import { postDB } from '@/DB/postData.js';

export async function GET(req, res) {
	const { postNum } = await res.params;
	return NextResponse.json({ result: postDB[parseInt(postNum)] });
}
