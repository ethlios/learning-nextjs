'use client';
import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

export interface IAppProps {
    children: ReactNode;
}

export default function Provider({ children }: IAppProps) {
    return <SessionProvider>{children}</SessionProvider>;
}
