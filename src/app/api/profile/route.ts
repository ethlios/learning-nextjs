import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const res = await fetch(`https://js-post-api.herokuapp.com/api/profile`);
    const data = await res.json();
    return NextResponse.json(data);
}

export const config = {
    matcher: '/api/:path*',
};
