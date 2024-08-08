import React from 'react';

export const CompanyProfileCard = ({ company }) => {
    return (
        <div className="bg-g p-4 rounded-lg shadow-md bg-[#80ed99]">
            {company.foto && (
                <img
                    src={company.foto}
                    alt={company.nome}
                    className="w-full h-40 object-cover rounded-md"
                />
            )}
            <h2 className="text-xl font-semibold mt-2 text-blue text-justify">{company.nome}</h2>
            <p className="text-gray-600 mt-1">{company.descricao}</p>
        </div>
    );
};
