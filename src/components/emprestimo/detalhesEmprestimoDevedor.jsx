
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const DetalhesEmprestimoDevedor = () => {
    const { id } = useParams();
    const [empresaDetalhe, setEmpresaDetalhe] = useState(null); 
    const [emprestimo, setEmprestimo] = useState(null);

    useEffect(() => {
        const fetchEmprestimo = async () => {
            try {
                const response = await axios.get( `${import.meta.env.VITE_API_BASE_URL}/api/emprestimo/${id}`);
                const {credorId} = response.data.data
                const empresaDetalhe = await axios.get( `${import.meta.env.VITE_API_BASE_URL}/api/credorid/${credorId}`);

               
                setEmprestimo(response.data);
                setEmpresaDetalhe(empresaDetalhe.data);

                console.log(response.data.data.criadoEm);
                console.log(empresaDetalhe.data.nomeEmpresa);
            } catch (error) {
                console.error('Erro ao buscar empréstimo:', error);
            }
        };

        fetchEmprestimo();
    }, [id]);

    if (!emprestimo) return <p>Carregando...</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Detalhes do Empréstimo</h1>
            <p><strong>Nome da Empresa:</strong> {empresaDetalhe.nomeEmpresa}</p>
            <p><strong>Montante:</strong> R$ {emprestimo.data.valor.toFixed(2)}</p>
            <p><strong>Data de Envio:</strong> {emprestimo.data.criadoEm}</p>
            <p><strong>Data de Devolução:</strong> {emprestimo.data.dataDevolucao}</p>
            <p><strong>Status:</strong> {emprestimo.data.status}</p>
            <p><strong>Jurídico:</strong> {emprestimo.data.juris}</p>
        </div>
    );
};

