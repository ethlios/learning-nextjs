'use client';
import Link from 'next/link';
import React, { ReactNode, useEffect } from 'react';
import SigninButton from '../signInButton';

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
            <div className="bg-slate-500 text-zinc-50 flex justify-between p-2">
                <div>
                    <Link href="/posts" className="mr-2 font-semibold">
                        Posts
                    </Link>
                    <Link href="/account" className="semibold">
                        Acount
                    </Link>
                </div>
                <SigninButton />
            </div>
            {children}
        </>
    );
}
