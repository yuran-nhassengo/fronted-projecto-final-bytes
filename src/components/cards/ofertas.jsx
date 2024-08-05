import React from 'react';

export const CompanyProfileCard = ({ company }) => {
    const { foto, nomeEmpresa, descricao } = company;

    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center p-4">
                <img
                    src={foto}
                    alt={`${nomeEmpresa} logo`}
                    className="w-16 h-16 rounded-full object-cover border border-gray-200"
                />
                <div className="ml-4">
                    <h2 className="text-xl font-bold text-gray-900">{nomeEmpresa}</h2>
                    <p className="text-gray-700 mt-2">{descricao}</p>
                </div>
            </div>
        </div>
    );
};
