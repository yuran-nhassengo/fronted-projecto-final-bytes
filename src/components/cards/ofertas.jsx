import React from 'react';

export const CompanyProfileCard = ({ company }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            {company.foto && (
                <img
                    src={company.foto}
                    alt={company.nome}
                    className="w-full h-40 object-cover rounded-md"
                />
            )}
            <h2 className="text-xl font-semibold mt-2">{company.nome}</h2>
            <p className="text-gray-600 mt-1">{company.descricao}</p>
        </div>
    );
};
