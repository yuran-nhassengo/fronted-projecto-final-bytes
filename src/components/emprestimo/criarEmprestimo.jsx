import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react'; 
import { Footer } from '../navBar';

export const CriarEmprestimo = () => {
    const [empresa, setEmpresa] = useState('');
    const [motivo, setMotivo] = useState('');
    const [dataDevolucao, setDataDevolucao] = useState('');
    const [valor, setValor] = useState('');
    const [credores, setCredores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [qrCodeValue, setQrCodeValue] = useState(''); 
    const [contaPessoal, setContaPessoal] = useState(false); 

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

        if (!motivo || !dataDevolucao || !valor) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        try {
            if (contaPessoal) {
                const info = {
                    motivo,
                    dataDevolucao,
                    valor
                };
                const queryString = new URLSearchParams(info).toString();
                setQrCodeValue(`https://example.com/confirmar-emprestimo?${queryString}`);
            } else {
                
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
                setQrCodeValue(''); 
            }
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

    const handleRadioChange = (isContaPessoal) => {
        setContaPessoal(isContaPessoal);
        if (!isContaPessoal) {
            setQrCodeValue(''); 
        }
    };

    if (loading) return <p>Carregando credores...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mx-auto p-4 sm:p-6">
            <h1 className="text-2xl font-bold mb-6">Criar Empréstimo</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="contaPessoal"
                        name="tipoConta"
                        checked={contaPessoal}
                        onChange={() => handleRadioChange(true)}
                        className="mr-2"
                    />
                    <label htmlFor="contaPessoal" className="text-sm font-medium text-gray-700">
                        Conta Pessoal
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="empresa"
                        name="tipoConta"
                        checked={!contaPessoal}
                        onChange={() => handleRadioChange(false)}
                        className="mr-2"
                    />
                    <label htmlFor="empresa" className="text-sm font-medium text-gray-700">
                        Empresa
                    </label>
                </div>

                {!contaPessoal && (
                    <div>
                        <label htmlFor="empresa" className="block text-sm font-medium text-gray-700">
                            Selecionar Empresa
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
                )}

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
                        {contaPessoal ? 'Gerar QR Code' : 'Enviar'}
                    </button>
                </div>
            </form>

            {qrCodeValue && (
                <div className="mt-6">
                    <h3 className="text-lg font-medium mb-2">QR Code do Empréstimo</h3>
                    <QRCode value={qrCodeValue} size={256} />
                </div>
            )}

            <Footer />
        </div>
    );
};
