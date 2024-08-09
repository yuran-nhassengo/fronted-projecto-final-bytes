import React from 'react';

export const CompanyCard = ({ company, onDoubleClick }) => {
    const { nomeEmpresa, montante, dataEnvio, dataPagamento, status, juris } = company;

    // Formatando as datas
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    };

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
                        <p>{formatDate(dataEnvio)}</p> {/* Formatação da data */}
                    </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div className="text-gray-700 text-sm">
                        <p className="font-medium">Data de Pagamento:</p>
                        <p>{formatDate(dataPagamento)}</p> {/* Formatação da data */}
                    </div>
                    <div className="text-gray-700 text-sm">
                        <p className="font-medium">Status:</p>
                        <p className={`font-semibold ${status === "aceite" ? "text-blue" : status === "rejeitado" ? "text-red" : "text-yellow"}`}> {/* Ajustar classes */}
                            {status}
                        </p>
                    </div>
                </div>
                <div className="text-gray-700 text-sm">
                    <p className="font-medium">Jurís:</p>
                    <p>{juris}</p>
                </div>
            </div>
        </div>
    );
};
