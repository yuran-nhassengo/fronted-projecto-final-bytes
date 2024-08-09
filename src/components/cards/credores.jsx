import React from 'react';

export const Credores = ({ company }) => {
    if (!company) return null;

    return (
        <div className="bg-[#80ed99] p-4 rounded-lg shadow-md">
            <h2 className="text-xl text-blue font-semibold mb-2">{company.nomeEmpresa}</h2>
            <p className="text-black mb-1"><strong>NUIT:</strong> {company.nuit}</p>
            <p className="text-black mb-1"><strong>Endereço:</strong> {company.endereco}</p>
            <p className="text-black mb-1"><strong>Email:</strong> {company.email}</p>
        </div>
    );
};
