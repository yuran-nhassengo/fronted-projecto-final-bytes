import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CompanyCard } from '../cards/emprestimo';
import { Link, useNavigate } from 'react-router-dom';

export const EmprestimoDevedor = () => {
    const [emprestimos, setEmprestimos] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('todos');
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchEmprestimos = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token não encontrado');
                return;
            }
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/emprestimos`,{
                    headers: {
                        'Authorization': `Bearer ${token}`
                      }
                });
                console.log(response.data);
                setEmprestimos(response.data);
            } catch (error) {
                console.error('Erro ao buscar empréstimos:', error);
            }
        };

        fetchEmprestimos();
    }, []);

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    const filteredEmprestimos = emprestimos.filter(emprestimo =>
        selectedFilter === 'todos' || emprestimo.usuario === 'meu-usuario' || emprestimo.usuario === 'por-pagar'
    );

    const handleNewDividendRequest = () => {
        console.log('Solicitar novo dividendo');
    };

    const handleEmprestar = () => {
        console.log('Emprestar');
    };

    const handleCardDoubleClick = (emprestimo) => {
        navigate(`/detalhes-emprestimo-devedor/${emprestimo._id}`); 
    };

    return (
        <div className="p-4">
            <div className="mb-6 flex space-x-4">
                <Link
                    to="/criar-emprestimo"
                    onClick={handleNewDividendRequest}
                    className="px-4 py-2 bg-green text-white font-semibold rounded-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Solicitar Divida
                </Link>
                <button
                    onClick={handleEmprestar}
                    className="px-4 py-2 bg-green text-white font-semibold rounded-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    Emprestar
                </button>
            </div>

            <div className="mb-6">
                <input
                    type="radio"
                    id="todos"
                    name="filter"
                    value="todos"
                    checked={selectedFilter === 'todos'}
                    onChange={handleFilterChange}
                />
                <label htmlFor="todos" className="ml-2">Todos</label>

                <input
                    type="radio"
                    id="meus-emprestimos"
                    name="filter"
                    value="meus-emprestimos"
                    checked={selectedFilter === 'meus-emprestimos'}
                    onChange={handleFilterChange}
                    className="ml-4"
                />
                <label htmlFor="meus-emprestimos" className="ml-2">Meus Empréstimos</label>

                <input
                    type="radio"
                    id="por-pagar"
                    name="filter"
                    value="por-pagar"
                    checked={selectedFilter === 'por-pagar'}
                    onChange={handleFilterChange}
                    className="ml-4"
                />
                <label htmlFor="por-pagar" className="ml-2">Por Pagar</label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEmprestimos.map(emprestimo => (
                    <CompanyCard
                        key={emprestimo._id}
                        company={{
                            _id: emprestimo._id, 
                            nomeEmpresa: emprestimo.nomeEmpresa,
                            montante: `R$ ${emprestimo.valor.toFixed(2)}`,
                            dataEnvio: emprestimo.dataEnvio,
                            dataPagamento: emprestimo.dataDevolucao,
                            status: 'Pendente',
                            juris: 'Jurídico A'
                        }}
                        onDoubleClick={handleCardDoubleClick} 
                    />
                ))}
            </div>
        </div>
    );
};
