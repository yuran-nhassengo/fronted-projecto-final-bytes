import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { CompanyProfileCard } from '../components/cards/ofertas';  
import { SearchComponent } from '../components/search'; 
import { Footer } from '../components/navBar';  

export const Home = () => {
    const [ofertas, setOfertas] = useState([]); 
    const [filteredOfertas, setFilteredOfertas] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
    const [searchTerm, setSearchTerm] = useState(''); 

    useEffect(() => {
        const fetchOfertas = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/credores/oferta`);
                console.log('Dados recebidos:', response.data); 
                setOfertas(response.data);
                setFilteredOfertas(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Erro ao buscar ofertas:', err);
                setError('Erro ao buscar ofertas.');
                setLoading(false);
            }
        };

        fetchOfertas();
    }, []); 

    useEffect(() => {
        console.log('Termo de Pesquisa:', searchTerm); 
        if (searchTerm) {
            setFilteredOfertas(
                ofertas.filter((oferta) => 
                    oferta.nome && oferta.nome.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        } else {
            setFilteredOfertas(ofertas);
        }
    }, [searchTerm, ofertas]);

    const handleSearchChange = (event) => {
        console.log('Mudança na Pesquisa:', event.target.value); 
        setSearchTerm(event.target.value);
    };

    if (loading) return <p>Carregando...</p>; 
    if (error) return <p>{error}</p>; 

    return (
        <div className="relative min-h-screen bg-gray-100">
            <SearchComponent searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <main className="pt-16 mt-8 pb-16">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredOfertas.map((oferta, index) => (
                        <CompanyProfileCard key={index} company={oferta} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};
