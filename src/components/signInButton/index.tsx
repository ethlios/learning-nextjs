'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import axios from 'axios';

const SigninButton = () => {
    const { data: session } = useSession();

    useEffect(() => {
        const axioClient = axios.create({
            baseURL: 'http://localhost:3000/',
        });
        axioClient.interceptors.request.use(async (config) => {
            const token = session?.user.accessToken;
            // Get session from NextAuth
            if (token) {
                config.headers.Authorization = `${token}`;
            }
            return config;
        });
    });

    if (session && session.user) {
        return (
            <div className="flex gap-4 ml-auto">
                <p>{session.user.name}</p>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        );
    }
    return <button onClick={() => signIn()}>Sign In</button>;
};

export default SigninButton;
