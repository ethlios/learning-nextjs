'use client';
import Link from 'next/link';
import { useRouter, useSearchParams, notFound } from 'next/navigation';
import React, { FunctionComponent, useEffect, useState } from 'react';
export interface CreatePageProps {}

interface PostPageIDProps {}

const PostPageID: FunctionComponent<PostPageIDProps> = ({}) => {
    const [postLists, setPostLists] = useState([]);
    const route = useRouter();
    const param = useSearchParams();
    const page: number = Number(param.get('page'));

    useEffect(() => {
        if (page > 0 && page < 6) {
            (async () => {
                const res = await fetch(
                    `http://js-post-api.herokuapp.com/api/posts?_page=${page}`,
                    { next: { revalidate: 10 } },
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

    const handlePrevPage = (): void => {
        if (page > 1) {
            route.push(`/posts/id?page=${page - 1}`);
        }
    };

    return (
        <div className="flex justify-center p-10 flex-col">
            <div>
                <ul className="list-decimal">
                    {postLists.map((post: any) => {
                        return (
                            <li key={post.id}>
                                <Link href={`/posts/detail?q=${post.id}`}>
                                    <h1 className="font-bold">{post.title}</h1>
                                </Link>
                                <h3 className="text-xs">{post.description}</h3>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="flex justify-center font-semibold">
                {postLists.length > 0 && (
                    <button onClick={handlePrevPage} className="mr-4">
                        Prev Page
                    </button>
                )}
                {postLists.length > 0 && (
                    <button onClick={handleNextPage}>Next Page</button>
                )}
            </div>
        </div>
    );
};

export default PostPageID;
