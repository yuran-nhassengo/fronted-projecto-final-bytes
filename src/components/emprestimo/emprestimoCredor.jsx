import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CompanyCard } from '../cards/emprestimo';
import { Link, useNavigate } from 'react-router-dom';

export const EmprestimoCredor = ({ searchTerm }) => {
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
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/credores/emprestimo`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log('Dados recebidos:', response.data); 
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

    const filteredEmprestimos = emprestimos.filter(emprestimo => {
        const nomeDevedor = emprestimo.nomeDevedor || '';
        const nomeEmpresa = emprestimo.nomeEmpresa || '';
        const lowerCaseSearchTerm = searchTerm ? searchTerm.toLowerCase() : '';

       
        const statusFilter = selectedFilter === 'todos' ||
                             (selectedFilter === 'aceite' && emprestimo.status === 'aceite') ||
                             (selectedFilter === 'pendente' && emprestimo.status === 'pendente');
                             
       
        const searchFilter = nomeDevedor.toLowerCase().includes(lowerCaseSearchTerm) ||
                             nomeEmpresa.toLowerCase().includes(lowerCaseSearchTerm);

        return statusFilter && searchFilter;
    });

    const handleCardDoubleClick = (company) => {
        navigate(`/detalhes-emprestimo-credor/${company._id}`, { state: { company } });
    };

    return (
        <div className="p-4">
            <div className="mb-6 flex space-x-4">
                <Link
                    to="/criar-emprestimo"
                    className="px-4 py-2 bg-green text-white font-semibold rounded-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Responder Solicitação
                </Link>
                <Link
                    to="/ofertas-page"
                    className="px-4 py-2 bg-green text-white font-semibold rounded-md hover:bg-blue focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    Criar Oferta
                </Link>
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
                    id="aceites"
                    name="filter"
                    value="aceite"
                    checked={selectedFilter === 'aceite'}
                    onChange={handleFilterChange}
                    className="ml-4"
                />
                <label htmlFor="aceites" className="ml-2">Aceites</label>

                <input
                    type="radio"
                    id="pendentes"
                    name="filter"
                    value="pendente"
                    checked={selectedFilter === 'pendente'}
                    onChange={handleFilterChange}
                    className="ml-4"
                />
                <label htmlFor="pendentes" className="ml-2">Pendentes</label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEmprestimos.length > 0 ? (
                    filteredEmprestimos.map(emprestimo => (
                        <CompanyCard
                            key={emprestimo._id}
                            company={{
                                _id: emprestimo._id,
                                nomeEmpresa: emprestimo.nomeDevedor,
                                montante: `${emprestimo.valor.toFixed(2)} MZN`,
                                dataEnvio: emprestimo.dataEnvio,
                                dataPagamento: emprestimo.criadoEm,
                                status: emprestimo.status,
                                juris: '0'
                            }}
                            onDoubleClick={() => handleCardDoubleClick(emprestimo)}
                        />
                    ))
                ) : (
                    <p>Nenhum empréstimo encontrado.</p>
                )}
            </div>
        </div>
    );
};
