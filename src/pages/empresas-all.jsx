import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Credores } from '../components/cards/credores';
import { Footer } from '../components/navBar'; 
import { SearchComponent } from '../components/search';  

export const EmpresasAll = () => {
    const [credorList, setCredorList] = useState([]);
    const [filteredCredores, setFilteredCredores] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [searchTerm, setSearchTerm] = useState(''); 

    useEffect(() => {
        const fetchCredores = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/credores`);
                console.log('Dados recebidos:', response.data.data); 
                setCredorList(response.data.data); 
                setFilteredCredores(response.data.data);
                setLoading(false);
            } catch (err) {
                console.error('Erro ao buscar credores:', err);
                setError('Erro ao buscar credores.');
                setLoading(false);
            }
        };

        fetchCredores();
    }, []); 

    useEffect(() => {
        console.log('Termo de Pesquisa:', searchTerm);
        if (searchTerm) {
            setFilteredCredores(
                credorList.filter((credor) => 
                    credor.nomeEmpresa && credor.nomeEmpresa.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        } else {
            setFilteredCredores(credorList);
        }
    }, [searchTerm, credorList]);

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
                <p className="font-bold text-2xl text-green text-center pt-2">Empresas</p>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                    {filteredCredores.map((credor, index) => (
                        <Credores key={index} company={credor} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    ); 
};
