'use client';
import Link from 'next/link';
import React, { ReactNode, useEffect } from 'react';

export interface HeaderProps {
    children: ReactNode;
}
export function Header({ children }: HeaderProps): JSX.Element {
    useEffect(() => {
        console.log('Mouting');

        return () => console.log('Unmouted...');
    });
    return (
        <>
            <div className="bg-slate-500 text-zinc-50">
                <Link href="/posts">Posts</Link>
                <Link href="/account">Acount</Link>
            </div>
            {children}
        </>
    );
}
