import React, { useState } from 'react';

export const Configuracoes = () => {

    const [profilePic, setProfilePic] = useState(null);

 
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setProfilePic(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container mx-auto p-4 sm:p-6">
            <div className="flex flex-col items-center">
          
                <div className="mb-6 text-center">
                    <img 
                        src={profilePic || 'https://via.placeholder.com/150'} 
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
                      
                        <div>
                            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                                Nome
                            </label>
                            <input 
                                type="text" 
                                id="nome" 
                                name="nome" 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Seu nome completo"
                            />
                        </div>

                      
                        <div>
                            <label htmlFor="bilhete" className="block text-sm font-medium text-gray-700">
                                Número de Bilhete de Identidade
                            </label>
                            <input 
                                type="text" 
                                id="bilhete" 
                                name="bilhete" 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Número do bilhete de identidade"
                            />
                        </div>

                     
                        <div>
                            <label htmlFor="genero" className="block text-sm font-medium text-gray-700">
                                Gênero
                            </label>
                            <select 
                                id="genero" 
                                name="genero" 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            >
                                <option value="">Selecione um gênero</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>

                      
                        <div>
                            <label htmlFor="nascimento" className="block text-sm font-medium text-gray-700">
                                Data de Nascimento
                            </label>
                            <input 
                                type="date" 
                                id="nascimento" 
                                name="nascimento" 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                       
                        <div>
                            <label htmlFor="endereco" className="block text-sm font-medium text-gray-700">
                                Endereço
                            </label>
                            <input 
                                type="text" 
                                id="endereco" 
                                name="endereco" 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Seu endereço completo"
                            />
                        </div>

                      
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                E-mail
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Seu e-mail"
                            />
                        </div>

                      
                        <div>
                            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
                                Senha
                            </label>
                            <input 
                                type="password" 
                                id="senha" 
                                name="senha" 
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Sua senha"
                            />
                        </div>

                       
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