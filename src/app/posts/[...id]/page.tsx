'use client';
import React, { useEffect } from 'react';
import { useParams, useRouter, usePathname, useSearchParams } from 'next/navigation';

export interface CreatePageProps {
    params: { slug: string };
}

export default function PostPageID(props: CreatePageProps) {
    const router = useRouter();
    const params = useParams();
    const pathnames = usePathname();
    const searchParams = useSearchParams();
    const search = searchParams.get('q');
    useEffect(() => {
        console.log(router);
        console.log(params);
        console.log(pathnames);
        console.log(searchParams);
        console.log(search);
    });
    return (
        <div className="flex justify-center h-full">
            <h1 className="font-bold">ALl param</h1>
            <button onClick={() => router.push('/account')}>Click</button>
        </div>
    );
}
