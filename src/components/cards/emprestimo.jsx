import React from "react";

export const CompanyCard = ({ company }) => {
    const { nomeEmpresa, montante, dataEnvio, dataPagamento, status, juris } = company;

    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-900">{nomeEmpresa}</h2>
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
                    <p className="font-medium">Juris:</p>
                    <p>{juris}</p>
                </div>
            </div>
        </div>
    );
};
