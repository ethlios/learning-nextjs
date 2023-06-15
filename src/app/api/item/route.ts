import { NextResponse } from 'next/server';

export async function GET() {
    // const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    // const data = await res.json();

    return NextResponse.json({ name: 'VO THE LOI' });
}
