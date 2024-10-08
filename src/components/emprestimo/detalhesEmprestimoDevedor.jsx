import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Footer } from '../navBar';
import { SearchComponent } from '../search';

export const DetalhesEmprestimoDevedor = () => {
    const { id } = useParams();
    const [empresaDetalhe, setEmpresaDetalhe] = useState(null); 
    const [emprestimo, setEmprestimo] = useState(null);
    const [isEditing, setIsEditing] = useState(false); 
    const [formData, setFormData] = useState({
        valor: '',
        dataDevolucao: '',
    });

    useEffect(() => {
        const fetchEmprestimo = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/emprestimo/${id}`);
                const { credorId } = response.data.data;
                const empresaResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/credorid/${credorId}`);

                setEmprestimo(response.data.data);
                setEmpresaDetalhe(empresaResponse.data);
                setFormData({
                    valor: response.data.data.valor,
                    dataDevolucao: response.data.data.dataDevolucao,
                });

            } catch (error) {
                console.error('Erro ao buscar empréstimo:', error);
            }
        };

        fetchEmprestimo();
    }, [id]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/emprestimo/${id}`, formData);
            setEmprestimo(prev => ({
                ...prev,
                ...formData,
            }));
            setIsEditing(false);
        } catch (error) {
            console.error('Erro ao salvar alterações:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePayment = () => {
        console.log('Pagamento realizado');
       
    };

    if (!emprestimo || !empresaDetalhe) return <p>Carregando...</p>;

    const isPaymentEnabled = emprestimo.status !== 'aceite';

    return (
        <div className="p-4">
            <SearchComponent />
            
            <div className="mt-36 bg-white shadow-md rounded-lg p-8 w-full md:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto">
                <h1 className="text-2xl font-bold mb-4 text-green">Detalhes do Empréstimo</h1>

                {isEditing ? (
                <div>
                    <div className="mb-4">
                        <label className="block mb-2">Nome da Empresa:</label>
                        <input
                            type="text"
                            value={empresaDetalhe.nomeEmpresa}
                            readOnly
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Montante:</label>
                        <input
                            type="text"
                            name="valor"
                            value={formData.valor}
                            onChange={handleInputChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Data de Devolução:</label>
                        <input
                            type="date"
                            name="dataDevolucao"
                            value={formData.dataDevolucao}
                            onChange={handleInputChange}
                            className="border p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Status:</label>
                        <input
                            type="text"
                            value={emprestimo.status}
                            readOnly
                            className="border p-2 w-full bg-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Jurídico:</label>
                        <input
                            type="text"
                            value={emprestimo.juris}
                            readOnly
                            className="border p-2 w-full bg-white"
                        />
                    </div>
                    <button
                        onClick={handleSaveClick}
                        className="px-4 py-2 bg-blue text-white font-semibold rounded-md hover:bg-green"
                    >
                        Salvar
                    </button>
                </div>
                ) : (
                <div>
                    <p><strong>Nome da Empresa:</strong> {empresaDetalhe.nomeEmpresa}</p>
                    <p><strong>Montante:</strong> R$ {emprestimo.valor.toFixed(2)}</p>
                    <p><strong>Data de Envio:</strong> {emprestimo.criadoEm}</p>
                    <p><strong>Data de Devolução:</strong> {emprestimo.dataDevolucao}</p>
                    <p><strong>Status:</strong> {emprestimo.status}</p>
                    <p><strong>Jurís:</strong> {emprestimo.juris}</p>                     
                    <button
                        onClick={handleEditClick}
                        className="px-4 py-2 bg-yellow text-black font-semibold rounded-md hover:bg-green hover:text-white mr-2"
                    >
                        Editar
                    </button>
                    <button
                        onClick={handlePayment}
                        disabled={!isPaymentEnabled}
                        className={`px-4 py-2 font-semibold rounded-md ${isPaymentEnabled ? 'bg-blue hover:bg-green hover:text-white' : 'bg-gray cursor-not-allowed'}`}
                    >
                        Fazer Pagamento
                    </button>
                </div>
                )}
            </div>
            <Footer />
        </div>
    );
};
