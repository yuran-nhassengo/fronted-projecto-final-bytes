import React from 'react';
import { Login } from '../components/login';
import { Footer } from '../components/navBar';

export const LoginPage = () => {
    return (
        <div className="relative min-h-screen bg-gray-100 flex flex-col">
            <main className="flex-grow flex items-center justify-center">
                <div className="w-full h-full flex">
                    <Login />
                </div>
            </main>
            <Footer />
        </div>
    );
};

