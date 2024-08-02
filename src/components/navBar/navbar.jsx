import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="bg-blue p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
               
                <div className="text-white text-2xl font-bold">
                    <p to="/" className="hover:text-gray-200">
                        MeuSite
                    </p>
                </div>

                <div className="space-x-4">
                    <p
                        to="/emprestimo"
                        className="text-white hover:bg-blue px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Empréstimo
                    </p>
                    <p
                        to="/disputa"
                        className="text-white hover:bg-blue px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Disputa
                    </p>
                    <p
                        to="/"
                        className="text-white hover:bg-blue px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Empresas
                    </p>
                </div>
            </div>
        </nav>
    );
};