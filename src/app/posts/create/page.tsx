'use client';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ConfigRoutesPage from '~/routes/config';

export interface PostPageIDProps {}

export default function CreatePage(props: PostPageIDProps) {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div className="flex justify-center h-full">
            <ul>
                {ConfigRoutesPage.map((page, index) => {
                    const isActive = pathname.startsWith(page.path);
                    return (
                        <li key={index}>
                            <Link
                                href={page.path}
                                className={isActive ? 'text-blue' : 'text-black'}
                                // prefetch={true} ---> trong môi trường production
                                // giúp load các page khi trong màn hình viewport nhờ vậy
                                // giúp tải trang nhanh hơn
                                // prefect mặc định là true => không cần thêm
                                // prefect={false} => hủy
                            >
                                {page.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
