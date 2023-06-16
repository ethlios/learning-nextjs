import { NextResponse } from 'next/server';

export async function GET() {
    const res = await fetch('https://js-post-api.herokuapp.com/api/posts');
    const data = await res.json();

    return NextResponse.json(data);
}
