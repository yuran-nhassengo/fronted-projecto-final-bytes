import React from 'react';

export const CompanyCard = ({ company, onDoubleClick }) => {
    const { nomeEmpresa, montante, dataEnvio, dataPagamento, status, juris } = company;

    return (
        <div 
            className="max-w-sm mx-auto bg-[#80ed99] shadow-lg rounded-lg overflow-hidden cursor-pointer p-1"
            onDoubleClick={() => onDoubleClick(company)}
        >
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-blue">{nomeEmpresa}</h2>
                <div className="flex items-center justify-between mb-4">
                    <div className="text-gray-700 text-sm">
                        <p className="font-medium">Montante:</p>
                        <p>{montante}</p>
                    </div>
                    <div className="text-gray-700 text-sm">
                        <p className="font-medium">Data de Envio:</p>
                        <p>{dataEnvio}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div className="text-gray-700 text-sm">
                        <p className="font-medium">Data de Pagamento:</p>
                        <p>{dataPagamento}</p>
                    </div>
                    <div className="text-gray-700 text-sm">
                        <p className="font-medium">Status:</p>
                        <p className={`font-semibold ${status === "Pago" ? "text-green-600" : "text-red-600"}`}>
                            {status}
                        </p>
                    </div>
                </div>
                <div className="text-gray-700 text-sm">
                    <p className="font-medium">Jurus:</p>
                    <p>{juris}</p>
                </div>
            </div>
        </div>
    );
};
