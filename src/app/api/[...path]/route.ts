import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    const { searchParams, pathname } = new URL(req.url);
    const paramsPage = searchParams.get('_page');
    const paramsQ = searchParams.get('q');
    const res = await fetch(
        `https://js-post-api.herokuapp.com${pathname}?_page=${paramsPage ?? ''}&&q=${
            paramsQ ?? ''
        }`,
    );
    const data = await res.json();

    return NextResponse.json({ data });
}
