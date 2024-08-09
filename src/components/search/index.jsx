import React from 'react';
import { MagnifyingGlassIcon, MicrophoneIcon, Cog6ToothIcon, BellIcon } from '@heroicons/react/24/solid'; 
import { Link } from 'react-router-dom';

export const SearchComponent = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="fixed top-0 left-0 w-full p-4 bg-white shadow-md z-50 flex items-center justify-between">
            <form onSubmit={(e) => e.preventDefault()} className="relative flex-1">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={onSearchChange}
                    placeholder="Pesquisar..."
                    className="w-full pl-10 pr-12 py-2 border border-gray bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray" aria-hidden="true" />
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <MicrophoneIcon className="w-5 h-5 text-gray" aria-hidden="true" />
                </div>
            </form>
            <div className="flex space-x-4">
                <Link to='/configuracoes' className="p-2 text-black hover:text-gray-800">
                    <Cog6ToothIcon className="w-6 h-6" aria-hidden="true" />
                </Link>
                <Link to='/notificacoes' className="p-2 text-blue hover:text-gray-800">
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                </Link>
            </div>
        </div>
    );
};
