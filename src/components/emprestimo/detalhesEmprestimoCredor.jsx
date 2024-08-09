import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

export const DetalhesEmprestimoCredor = ({ onClose }) => {
    const location = useLocation();
    const { company } = location.state || {};  // Acessa o estado passado

    const [detalhes, setDetalhes] = useState(null);
    const [editando, setEditando] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const fetchDetalhes = async () => {
            try {
                // Use a `company._id` passado através do estado
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/credores/emprestimo/${company._id}`);
                setDetalhes(response.data);
                setFormData(response.data);
            } catch (error) {
                console.error('Erro ao buscar detalhes:', error);
            }
        };

        if (company) {
            fetchDetalhes();
        }
    }, [company]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/credores/emprestimo/${company._id}`, formData);
            setDetalhes(formData);
            setEditando(false);
        } catch (error) {
            console.error('Erro ao salvar:', error);
        }
    };

    if (!detalhes) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
                <h2 className="text-2xl font-semibold mb-4">Detalhes do Empréstimo</h2>
                {editando ? (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nome do Devedor:</label>
                            <input
                                type="text"
                                name="nomeDevedor"
                                value={formData.nomeDevedor}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Motivo:</label>
                            <input
                                type="text"
                                name="motivo"
                                value={formData.motivo}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Valor:</label>
                            <input
                                type="number"
                                name="valor"
                                value={formData.valor}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Data de Devolução:</label>
                            <input
                                type="date"
                                name="dataDevolucao"
                                value={formData.dataDevolucao}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Status:</label>
                            <input
                                type="text"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="mt-1 block w-full border border-gray rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 bg-blue text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Salvar
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <p><strong>Nome do Devedor:</strong> {detalhes.nomeDevedor}</p>
                        <p><strong>Motivo:</strong> {detalhes.motivo}</p>
                        <p><strong>Valor:</strong> R$ {detalhes.valor.toFixed(2)}</p>
                        <p><strong>Data de Devolução:</strong> {detalhes.dataDevolucao}</p>
                        <p><strong>Status:</strong> {detalhes.status}</p>
                        <button
                            onClick={() => setEditando(true)}
                            className="px-4 py-2 bg-yellow text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                        >
                            Editar
                        </button>
                    </div>
                )}
                <Link
                    to='/emprestimo'
                    onClick={onClose}
                    className="mt-8 px-4 py-2 bg-gray text-white font-semibold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                    Fechar
                </Link>
            </div>
        </div>
    );
};
