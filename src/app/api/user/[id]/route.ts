import prisma from '~/lib/prisma';
import { NextResponse } from 'next/server';
import { verifyJwt } from '~/lib/jwt';
import { getSession } from 'next-auth/react';

export async function GET(request: Request, { params }: { params: { id: number } }) {
    const accessToken = request.headers.get('Authorization');
    const session = await getSession();
    console.log(session?.user.accessToken);
    if (!accessToken || !verifyJwt(accessToken!)) {
        return new Response(
            JSON.stringify({
                error: 'unauthorized',
            }),
            {
                status: 401,
            },
        );
    }

    const userPosts = await prisma.post.findMany({
        where: { authorId: +params.id },
        include: {
            author: {
                select: {
                    email: true,
                    name: true,
                },
            },
        },
    });

    return NextResponse.json(userPosts);
}
