import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '~/components/common/header';
import { DefaultLayout } from '~/components/common/defaultLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const Layout = Header || DefaultLayout;
    return (
        <html lang="en">
            <body className={inter.className}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
