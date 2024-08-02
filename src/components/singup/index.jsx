import React, { useState } from "react";

export const Signup = () => {
   
    const [step, setStep] = useState(1); 
    const [formData, setFormData] = useState({
        nome: '',
        bi: '',
        dataNascimento: '',
        genero: '',
        profissao: '',
        contacto: '',
        email: '',
        endereco: '',
        senha: '',
        confirmarSenha: '',
        aceitarTermos: false,
    });

   
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

  
    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log("Dados do formulário:", formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
                    Cadastro
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {step === 1 && (
                        <>
                            <div>
                                <label htmlFor="nome" className="block text-gray-700 text-sm font-medium mb-1">Nome</label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="bi" className="block text-gray-700 text-sm font-medium mb-1">Número de Bilhete de Identidade</label>
                                <input
                                    type="text"
                                    id="bi"
                                    name="bi"
                                    value={formData.bi}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="dataNascimento" className="block text-gray-700 text-sm font-medium mb-1">Data de Nascimento</label>
                                <input
                                    type="date"
                                    id="dataNascimento"
                                    name="dataNascimento"
                                    value={formData.dataNascimento}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="genero" className="block text-gray-700 text-sm font-medium mb-1">Gênero</label>
                                <select
                                    id="genero"
                                    name="genero"
                                    value={formData.genero}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                >
                                    <option value="">Selecione...</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="feminino">Feminino</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="profissao" className="block text-gray-700 text-sm font-medium mb-1">Profissão</label>
                                <input
                                    type="text"
                                    id="profissao"
                                    name="profissao"
                                    value={formData.profissao}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="contacto" className="block text-gray-700 text-sm font-medium mb-1">Contato</label>
                                <input
                                    type="text"
                                    id="contacto"
                                    name="contacto"
                                    value={formData.contacto}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => setStep(2)}
                                className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-150 ease-in-out"
                            >
                                Próximo
                            </button>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="endereco" className="block text-gray-700 text-sm font-medium mb-1">Endereço</label>
                                <input
                                    type="text"
                                    id="endereco"
                                    name="endereco"
                                    value={formData.endereco}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="senha" className="block text-gray-700 text-sm font-medium mb-1">Senha</label>
                                <input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    value={formData.senha}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="confirmarSenha" className="block text-gray-700 text-sm font-medium mb-1">Confirmar Senha</label>
                                <input
                                    type="password"
                                    id="confirmarSenha"
                                    name="confirmarSenha"
                                    value={formData.confirmarSenha}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="aceitarTermos"
                                    name="aceitarTermos"
                                    checked={formData.aceitarTermos}
                                    onChange={handleChange}
                                    required
                                    className="mr-2"
                                />
                                <label htmlFor="aceitarTermos" className="text-gray-700 text-sm">Aceito os <a href="#" className="text-blue-600 hover:underline">termos e condições</a></label>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-150 ease-in-out"
                            >
                                Cadastrar
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};