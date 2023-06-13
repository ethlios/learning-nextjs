'use client';
import { useRouter, useSearchParams, notFound } from 'next/navigation';
import React, { FunctionComponent, useEffect, useState } from 'react';
export interface CreatePageProps {}

interface PostPageIDProps {}

const PostPageID: FunctionComponent<PostPageIDProps> = ({}) => {
    const [postLists, setPostLists] = useState([]);
    const route = useRouter();
    const param = useSearchParams();
    const page = Number(param.get('page'));

    useEffect(() => {
        if (page > 0 && page < 6) {
            (async () => {
                const res = await fetch(
                    `http://js-post-api.herokuapp.com/api/posts?_page=${page}`,
                    { next: { revalidate: 60 } },
                ).then((res) => res.json());
                setPostLists(res.data);
                route.push(`/posts/id?page=${page}`);
            })();
        } else {
            return notFound();
        }
    }, [page, route]);

    const handleNextPage = (): void => {
        if (page < 5) {
            route.push(`/posts/id?page=${page + 1}`);
        }
    };

    return (
        <div className="flex justify-center p-10">
            <ul className="list-decimal">
                {postLists.map((post: any) => {
                    return (
                        <li key={post.id}>
                            <h1>{post.title}</h1>
                            <h3>{post.description}</h3>
                        </li>
                    );
                })}
            </ul>
            {postLists.length > 0 && <button onClick={handleNextPage}>Next Page</button>}
        </div>
    );
};

export default PostPageID;
