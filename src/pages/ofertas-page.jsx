import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { Footer } from '../components/navBar'; 

export const OfertasPage = () => {
    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState('');
    const [descricao, setDescricao] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const token = localStorage.getItem('token');
                if (!token) {
                    console.error('Token não encontrado');
                    return;
                }

            const response = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/api/credor/oferta`,
                { 
                    nome,
                    foto,
                    descricao
                },
                { 
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.status === 201) {
                console.log('Oferta criada com sucesso:', response.data);
                navigate('/'); 
            } else {
                console.error('Erro ao criar oferta', response.data);
              
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
           
        }
    };

    return (
        <div className="relative min-h-screen bg-gray">
            <main className="pt-16 mt-8 pb-16">
                <div className="container mx-auto max-w-md bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-semibold mb-4">Criar Nova Oferta</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Tipo da Oferta</label>
                            <input
                                type="text"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="foto" className="block text-sm font-medium text-gray-700">URL da Foto</label>
                            <input
                                type="file"
                                id="foto"
                                value={foto}
                                onChange={(e) => setFoto(e.target.value)}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">Descrição</label>
                            <textarea
                                id="descricao"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                required
                                rows="4"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-green text-white font-semibold rounded-md shadow-sm hover:bg-green-700"
                        >
                            Criar Oferta
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};
