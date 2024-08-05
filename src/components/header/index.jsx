import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'; 
import { Menu } from '@headlessui/react'; 


const options = [
  { name: 'João Silva', value: 'joao_silva' },
  { name: 'Maria Oliveira', value: 'maria_oliveira' },
  { name: 'Ana Santos', value: 'ana_santos' },
];

export const HeaderNav = ({ title }) => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <ArrowLeftIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md">
            <span>Usuário Atual</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
            {options.map((option) => (
              <Menu.Item key={option.value}>
                {({ active }) => (
                  <button
                    className={`px-4 py-2 ${active ? 'bg-gray-100' : ''}`}
                    onClick={() => console.log(option.value)}
                  >
                    {option.name}
                  </button>
                )}
              </Menu.Item>
            ))}
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`px-4 py-2 text-blue-600 ${active ? 'bg-gray-100' : ''}`}
                  onClick={() => console.log('Criar Nova Conta')}
                >
                  Criar Nova Conta
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </header>
  );
};
