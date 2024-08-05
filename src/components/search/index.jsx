import React from 'react';
import { MagnifyingGlassIcon, MicrophoneIcon, Cog6ToothIcon, BellIcon } from '@heroicons/react/24/solid'; 

export const SearchComponent = () => {
    return (
        <div className="fixed top-0 left-0 w-full p-4 bg-gray-100 shadow-md z-50 flex items-center justify-between">
       
            <div className="relative flex-1">
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <MicrophoneIcon className="w-5 h-5 text-gray-500" aria-hidden="true" />
                </div>
            </div>
            <div className="flex space-x-4">
                <button className="p-2 text-gray-600 hover:text-gray-800">
                    <Cog6ToothIcon className="w-6 h-6" aria-hidden="true" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-800">
                    <BellIcon className="w-6 h-6" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
};
