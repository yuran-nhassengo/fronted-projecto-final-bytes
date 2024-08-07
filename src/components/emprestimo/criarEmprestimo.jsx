import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Footer } from '../navBar';

export const CriarEmprestimo = () => {
    const [empresa, setEmpresa] = useState('');
    const [motivo, setMotivo] = useState('');
    const [dataDevolucao, setDataDevolucao] = useState('');
    const [valor, setValor] = useState('');
    const [credores, setCredores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = localStorage.getItem('token');

    const fetchCredores = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/credores`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setCredores(response.data.data || response.data);
        } catch (error) {
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                        setError('Não autorizado. Verifique seu token.');
                        break;
                    case 403:
                        setError('Acesso proibido. Verifique suas permissões.');
                        break;
                    default:
                        setError('Erro ao buscar credores.');
                }
            } else {
                setError('Erro ao buscar credores.');
            }
            console.error('Erro ao buscar credores:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCredores();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!empresa || !motivo || !dataDevolucao || !valor) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/emprestimos`, {
                credorId: empresa,
                motivo,
                dataDevolucao,
                valor
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert('Empréstimo criado com sucesso!');
            setEmpresa('');
            setMotivo('');
            setDataDevolucao('');
            setValor('');
        } catch (error) {
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                        alert('Não autorizado. Verifique seu token.');
                        break;
                    case 403:
                        alert('Acesso proibido. Verifique suas permissões.');
                        break;
                    default:
                        alert('Erro ao criar empréstimo. Por favor, tente novamente.');
                }
            } else {
                alert('Erro ao criar empréstimo. Por favor, tente novamente.');
            }
            console.error('Erro ao criar empréstimo:', error);
        }
    };

    if (loading) return <p>Carregando credores...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mx-auto p-4 sm:p-6">
            <h1 className="text-2xl font-bold mb-6">Criar Empréstimo</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700">
                        Empresa
                    </label>
                    <select
                        id="empresa"
                        name="empresa"
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="">Selecione uma empresa</option>
                        {credores.length > 0 ? (
                            credores.map((credor) => (
                                <option key={credor._id} value={credor._id}>
                                    {credor.nomeEmpresa}
                                </option>
                            ))
                        ) : (
                            <option value="">Nenhuma empresa encontrada</option>
                        )}
                    </select>
                </div>

                <div>
                    <label htmlFor="motivo" className="block text-sm font-medium text-gray-700">
                        Motivo
                    </label>
                    <textarea
                        id="motivo"
                        name="motivo"
                        value={motivo}
                        onChange={(e) => setMotivo(e.target.value)}
                        rows="4"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Descreva o motivo do empréstimo"
                    />
                </div>

                <div>
                    <label htmlFor="dataDevolucao" className="block text-sm font-medium text-gray-700">
                        Data de Devolução
                    </label>
                    <input
                        type="date"
                        id="dataDevolucao"
                        name="dataDevolucao"
                        value={dataDevolucao}
                        onChange={(e) => setDataDevolucao(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label htmlFor="valor" className="block text-sm font-medium text-gray-700">
                        Valor
                    </label>
                    <input
                        type="number"
                        id="valor"
                        name="valor"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Insira o valor"
                    />
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Enviar
                    </button>
                </div>
            </form>
            <Footer />
        </div>
    );
};
