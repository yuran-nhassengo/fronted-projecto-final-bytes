import React from 'react';
import { CompanyCard } from '../cards/emprestimo'; 

const companies = [
    {
        nomeEmpresa: 'Unacredito',
        montante: 'R$ 10.000',
        dataEnvio: '2024-08-01',
        dataPagamento: '2024-08-10',
        status: 'Pago',
        juris: 'Jurídico A'
    },
  
];

const handleRequestLoan = (company) => {
    console.log('Solicitar mais empréstimo para:', company);
   
};

const handleNewDividendRequest = () => {
    console.log('Solicitar novo dividendo');
  
};

export const EmprestimoDevedor = () => {
    return (
        <div className ="p-4">
            <div className="mb-6">


                <button
                    onClick={handleNewDividendRequest}
                    className="px-4 py-2 bg-blue text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Solicitar Divida
                </button>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


                {companies.map(company => (
                    <CompanyCard
                        key={company.nomeEmpresa}
                        company={company}
                    />
                ))}

            </div>


        </div>

    );
};
