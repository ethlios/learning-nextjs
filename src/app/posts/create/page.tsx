'use client';
import * as React from 'react';
import { useParams, usePathname } from 'next/navigation';

export interface PostPageIDProps {}

export default function CreatePage(props: PostPageIDProps) {
    const params = useParams();
    const pathnames = usePathname();
    console.log(pathnames);
    return (
        <div className="flex justify-center h-full">
            <h1 className="font-bold">Create Page</h1>
        </div>
    );
}
