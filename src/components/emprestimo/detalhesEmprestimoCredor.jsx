import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

export const DetalhesEmprestimoCredor = ({ onClose }) => {
    const location = useLocation();
    const { company } = location.state || {}; 

    const [detalhes, setDetalhes] = useState(null);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const fetchDetalhes = async () => {
            try {
                console.log("id", company._id);
                const devedor = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/credores/emprestimo/${company._id}`);
                const emprestimo = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/emprestimo/${company._id}`);
                console.log("devedor", devedor);
                console.log("emprestimo", emprestimo);
                setDetalhes(emprestimo.data);
                setFormData(devedor.data);
            } catch (error) {
                console.error('Erro ao buscar detalhes:', error);
            }
        };

        if (company) {
            fetchDetalhes();
        }
    }, [company]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSave = async () => {
        try {
            console.log('Dados para salvar:', formData);
            await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/solicitacao/${company._id}`, formData);
            setDetalhes(prevDetalhes => ({ ...prevDetalhes, ...formData }));
        } catch (error) {
            console.error('Erro ao salvar:', error);
        }
    };

    if (!detalhes) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
                <h2 className="text-2xl font-semibold mb-4 text-black">Detalhes do Empréstimo</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray">Nome do Devedor:</label>
                        <input
                            type="text"
                            name="nomeDevedor"
                            value={formData.nomeDevedor || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray rounded-md shadow-sm focus:ring-blue focus:border-blue sm:text-sm"
                            disabled
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray">Motivo:</label>
                        <input
                            type="text"
                            name="motivo"
                            value={formData.motivo || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray rounded-md shadow-sm focus:ring-blue focus:border-blue sm:text-sm"
                            disabled
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray">Valor:</label>
                        <input
                            type="text"
                            name="valor"
                            value={`R$ ${formData.valor?.toFixed(2) || ''}`}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray rounded-md shadow-sm focus:ring-blue focus:border-blue sm:text-sm"
                            disabled
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray">Data de Devolução:</label>
                        <input
                            type="text"
                            name="dataDevolucao"
                            value={formData.dataDevolucao || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray rounded-md shadow-sm focus:ring-blue focus:border-blue sm:text-sm"
                            disabled
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray">Status:</label>
                        <select
                            name="status"
                            value={formData.status || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray rounded-md shadow-sm focus:ring-blue focus:border-blue sm:text-sm"
                        >
                            <option value="" disabled>Selecione...</option>
                            <option value="aceite">Aceitar</option>
                            <option value="rejeitado">Rejeitar</option>
                        </select>
                    </div>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2"
                    >
                        Salvar
                    </button>
                </div>
                <Link
                    to='/emprestimo'
                    onClick={onClose}
                    className="mt-8 px-4 py-2 bg-gray text-white font-semibold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray focus:ring-offset-2"
                >
                    Fechar
                </Link>
            </div>
        </div>
    );
};
