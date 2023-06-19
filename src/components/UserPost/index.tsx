'use client';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

export interface IAppProps {}

export default function App(props: IAppProps) {
    const { data: session } = useSession();
    const [posts, setPosts] = useState();

    const fetchPosts = async () => {
        const res = await fetch(`http://localhost:3000/api/user/${session?.user.id}`, {
            method: 'GET',
            headers: {
                Authorization: `${session?.user.accessToken}`,
            },
        });

        const response = await res.json();
        setPosts(response);
    };

    return (
        <div>
            <button onClick={fetchPosts}>Get Post</button>
            {posts && JSON.stringify(posts)}
        </div>
    );
}
