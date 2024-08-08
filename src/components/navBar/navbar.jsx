import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-green p-4 shadow-md flex justify-between items-center z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Link 
                        to="/" 
                        className="text-white hover:text-blue px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/emprestimo" 
                        className="text-white hover:text-blue px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Emprestimo
                    </Link>
                </div>
                <div className="flex space-x-4">
                    <Link
                        to="/disputa"
                        className="text-white hover:text-blue px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Disputa
                    </Link>
                    <Link
                        to="/empresas-all"
                        className="text-white hover:text-blue px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Empresas
                    </Link>
                </div>
            </div>
        </footer>
    );
};
