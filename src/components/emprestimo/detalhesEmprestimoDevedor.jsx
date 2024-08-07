
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const DetalhesEmprestimoDevedor = () => {
    const { id } = useParams();
    const [emprestimo, setEmprestimo] = useState(null);

    useEffect(() => {
        const fetchEmprestimo = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/emprestimos/${id}`);
                setEmprestimo(response.data);
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
            <p><strong>Nome da Empresa:</strong> {emprestimo.nomeEmpresa}</p>
            <p><strong>Montante:</strong> R$ {emprestimo.valor.toFixed(2)}</p>
            <p><strong>Data de Envio:</strong> {emprestimo.dataEnvio}</p>
            <p><strong>Data de Devolução:</strong> {emprestimo.dataDevolucao}</p>
            <p><strong>Status:</strong> {emprestimo.status}</p>
            <p><strong>Jurídico:</strong> {emprestimo.juris}</p>
        </div>
    );
};

