import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { CompanyProfileCard } from '../components/cards/ofertas';  
import { SearchComponent } from '../components/search';  
import { Footer } from '../components/navBar';  

export const Home = () => {
    const [ofertas, setOfertas] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchOfertas = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/credores/oferta`);
                setOfertas(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Erro ao buscar ofertas:', err);
                setError('Erro ao buscar ofertas.');
                setLoading(false);
            }
        };

        fetchOfertas();
    }, []); 

    if (loading) return <p>Carregando...</p>; 
    if (error) return <p>{error}</p>; 

    return (
        <div className="relative min-h-screen bg-gray-100">
            <SearchComponent />
            <main className="pt-16 mt-8 pb-16">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ofertas.map((oferta, index) => (
                        <CompanyProfileCard key={index} company={oferta} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};
