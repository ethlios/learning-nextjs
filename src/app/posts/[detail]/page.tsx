import { notFound, useRouter } from 'next/navigation';
import React from 'react';

export interface IAppProps {
    params: {
        id: string;
        detail: string;
    };
    searchParams: {
        q: string;
    };
}

async function getDatas(id: string) {
    const res = await fetch(`http://js-post-api.herokuapp.com/api/posts?q=${id}`);
    const detail = await res.json();
    return detail;
}

export default async function DetailPage(props: IAppProps) {
    const id = props.searchParams?.q;
    const detail = await getDatas(id);

    if (!id || typeof id === 'undefined') return notFound();
    for (let i = 0; i < detail.length; i++) {
        if (id !== detail[i].id) return notFound();
    }

    const resultHtml = detail.map((item: any) => {
        return (
            <div key={item.id}>
                <h1>{item.author}</h1>
                <h1>{item.title}</h1>
                <h1>{item.description}</h1>
            </div>
        );
    });

    return <div>{resultHtml}</div>;
}

// export async function generateStaticParams() {
//     const res = await fetch(`http://js-post-api.herokuapp.com/api/posts`);
//     const data = await res.json();
//     return data.map((detail: any) => ({ detail: detail.id }));
// }
