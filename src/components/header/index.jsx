import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'; 
import { Menu } from '@headlessui/react'; 
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../../contexts/AuthContext'; 

export const HeaderNav = ({ title, currentUserName, currentUserId }) => {
    const navigate = useNavigate();
    const { login, logout } = useAuth(); 
    const [selectedOption, setSelectedOption] = useState({ name: currentUserName || 'Contas', value: 'current_user' });
    const [options, setOptions] = useState([
        { name: currentUserName, value: 'current_user' },
        { name: 'Criar Nova Conta', value: 'create_account' }
    ]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/credor/${currentUserId}`);
                const companies = response.data.map(credor => ({
                    name: credor.nomeEmpresa,
                    value: credor._id 
                }));
                
                setOptions(prevOptions => [
                    { name: currentUserName, value: 'current_user' },
                    ...companies,
                    { name: 'Criar Nova Conta', value: 'create_account' }
                ]);
            } catch (error) {
                console.error('Erro ao buscar empresas:', error);
               
            }
        };

        if (currentUserId) {
            fetchCompanies();
        }
    }, [currentUserId, currentUserName]);

    const handleClick = async (value) => {
        
        if (value === 'create_account') {
            navigate('/signup-page-credor', { state: { userId: currentUserId } });
        } else {
          
            const selected = options.find(option => option.value === value);
    
            if (selected) {
                setSelectedOption(selected); // Atualiza a seleção
    
                try {
                    
                    const tipoConta = value === 'current_user' ? 'devedor' : 'credor'; 
                    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/user/switch`, {
                        userId: value,
                        tipoConta
                    }, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}` 
                        }
                    });
    
                 
                    login(response.data.token); 
                } catch (error) {
                    console.error('Erro ao trocar de conta:', error);
                   
                }
            } else {
                console.warn('Opção selecionada não encontrada:', value);
            }
        }
    };

    const handleLogout = () => {
        logout(); 
        navigate('/login'); 
    };

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={() => navigate(-1)}>
                    <ArrowLeftIcon className="w-6 h-6" aria-hidden="true" />
                </button>
                <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
                <Menu as="div" className="relative">
                    <Menu.Button className="flex items-center px-4 py-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-md">
                        <span>{selectedOption.name || 'Usuário Atual'}</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                        {options.map((option) => (
                            <Menu.Item key={option.value}>
                                {({ active }) => (
                                    <button
                                        className={`px-4 py-2 ${active ? 'bg-gray-100' : ''}`}
                                        onClick={() => handleClick(option.value)}
                                    >
                                        {option.name}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={`px-4 py-2 ${active ? 'bg-gray-100' : ''}`}
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
            </div>
        </header>
    );
};
