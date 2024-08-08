import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Credores } from '../components/cards/credores';
import { Footer } from '../components/navBar';  

export const EmpresasAll = () => {
    const [credorList, setCredorList] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchCredores = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/credores`);
                console.log(response.data.data)
                setCredorList(response.data.data); 
                setLoading(false);
            } catch (err) {
                console.error('Erro ao buscar credores:', err);
                setError('Erro ao buscar credores.');
                setLoading(false);
            }
        };

        fetchCredores();
    }, []); 

    if (loading) return <p>Carregando...</p>; 
    if (error) return <p>{error}</p>; 

    return (
        <div className="relative min-h-screen bg-gray-100">
            <main className="pt-16 mt-8 pb-16">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {credorList.map((credor, index) => (
                        <Credores key={index} company={credor} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};
