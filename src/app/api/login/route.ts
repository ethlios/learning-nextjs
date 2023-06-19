import prisma from '~/lib/prisma';
import * as brcypt from 'bcrypt';
import { signJwtAccessToken } from '~/lib/jwt';

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
        const accessToken = signJwtAccessToken(userWihoutPass);
        const result = {
            ...userWihoutPass,
            accessToken,
        };
        return new Response(JSON.stringify(result));
    } else return new Response(JSON.stringify(null));
}
