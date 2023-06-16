import prisma from '~/lib/prisma';
import * as brcypt from 'bcrypt';

interface RequestBody {
    username: string;
    password: string;
}

export async function POST(request: Request) {
    const body: RequestBody = await request.json();

    const user = await prisma.user.findFirst({
        where: {
            email: body.username,
        },
    });

    if (user && (await brcypt.compare(body.password, user.password))) {
        const { password, ...userWihoutPass } = user;
        return new Response(JSON.stringify(userWihoutPass));
    } else return new Response(JSON.stringify(null));
}
