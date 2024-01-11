import { NextResponse } from 'next/server';

const postDB = [
	{ id: 1, name: 'David', age: 20 },
	{ id: 2, name: 'Emily', age: 22 },
	{ id: 3, name: 'Michael', age: 30 },
];

export function GET() {
	return NextResponse.json({ result: postDB });
}
