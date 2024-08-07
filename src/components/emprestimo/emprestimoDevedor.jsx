import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CompanyCard } from '../cards/emprestimo'; 
import { Link } from 'react-router-dom';

export const EmprestimoDevedor = () => {
    const [emprestimos, setEmprestimos] = useState([]);

    useEffect(() => {
        const fetchEmprestimos = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/emprestimos`); 
                setEmprestimos(response.data);
            } catch (error) {
                console.error('Erro ao buscar empréstimos:', error);
            }
        };

        fetchEmprestimos();
    }, []);

    const handleNewDividendRequest = () => {
        console.log('Solicitar novo dividendo');
    };

    return (
        <div className="p-4">
            <div className="mb-6">
                <Link 
                    to="/criar-emprestimo"
                    onClick={handleNewDividendRequest}
                    className="px-4 py-2 bg-blue text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Solicitar Divida
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {emprestimos.map(emprestimo => (
                    <CompanyCard
                        key={emprestimo.nomeEmpresa}
                        company={{
                            nomeEmpresa: emprestimo.nomeEmpresa,
                            montante: `R$ ${emprestimo.valor.toFixed(2)}`,  
                            dataEnvio: emprestimo.dataEnvio,  
                            dataPagamento: emprestimo.dataDevolucao,
                            status: 'Pendente', 
                            juris: 'Jurídico A' 
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
