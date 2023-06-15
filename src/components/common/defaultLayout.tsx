import React, { ReactNode } from 'react';

export interface IAppProps {
    children: ReactNode;
}

export function DefaultLayout({ children }: IAppProps) {
    return <>{children}</>;
}
