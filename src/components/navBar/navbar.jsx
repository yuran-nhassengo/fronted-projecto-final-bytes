import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="bg-blue p-4 flex bottom-0 shadow-md w-full flex flex-col md:flex-row md:justify-between items-center">
            <div className="container mx-auto flex justify-between items-center">
               
                <div className="flex items-center space-x-4">
                    <Link 
                        to="/emprestimo" 
                        className="text-white hover:text-red px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Emprestimo
                    </Link>
                </div>

                <div className="flex space-x-4">
                   <Link
                        to="/disputa"
                        className="text-white hover:text-red px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Disputa
                    </Link>
                   <Link
                        to="/empresas"
                        className="text-white hover:text-red px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Empresas
                    </Link>
                </div>
            </div>
        </nav>
    );
};