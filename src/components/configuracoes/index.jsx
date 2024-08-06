import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Configuracoes = () => {
    const [profilePic, setProfilePic] = useState(null);
    const [formData, setFormData] = useState({
        nome: '',
        bilhete: '',
        genero: '',
        nascimento: '',
        endereco: '',
        email: '',
        senha: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token não encontrado');
                return;
            }

            try {
                const response = await axios.get('http://192.168.1.58:8000/api/get-devedor', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                console.log(response.data);

                const user = response.data;
                setProfilePic(user.profilePic || 'https://via.placeholder.com/150');
                setFormData({
                    nome: user.name || '',
                    bilhete: user.bi || '',
                    genero: user.genero || '',
                    nascimento: user.data || '',
                    endereco: user.endereco || '',
                    email: user.email || '',
                    senha: '' 
                });
            } catch (error) {
                console.error('Erro ao buscar dados do usuário', error);
            }
        };

        fetchUserData();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setProfilePic(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="container mx-auto p-4 sm:p-6">
            <div className="flex flex-col items-center">
                <div className="mb-6 text-center">
                    <img 
                        src={profilePic} 
                        alt="Perfil" 
                        className="w-32 h-32 rounded-full object-cover mx-auto"
                    />
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange} 
                        className="mt-4"
                    />
                </div>

                <div className="w-full max-w-md">
                    <form className="space-y-4">
                        {Object.entries(formData).map(([key, value]) => (
                            key !== 'senha' && (
                                <div key={key}>
                                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                    </label>
                                    <input 
                                        type={key === 'email' ? 'email' : key === 'nascimento' ? 'date' : 'text'} 
                                        id={key} 
                                        name={key} 
                                        value={value} 
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder={`Seu ${key}`}
                                    />
                                </div>
                            )
                        ))}
                        <div className="flex justify-center mt-6">
                            <button 
                                type="button" 
                                className="px-4 py-2 bg-blue text-white rounded-md shadow-sm hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Editar Perfil
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
