import React, { useState } from 'react';
import axios from 'axios'; 

export const SignupCredor = ({ userId }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    nuit: '',
    dataNascimento: '',
    endereco: '',
    descricao: '',
    email: '',
    senha: '',
    confirmSenha: '',
  });

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
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      
      const response = await axios.post('http://192.168.1.37:8000/api/credor/signup', {
        ...formData,
        devedorId: userId,
      });
      
      alert("Conta criada com sucesso!");
     
    } catch (error) {
      console.error("Erro ao criar conta:", error.response?.data?.message || error.message);
      alert("Erro ao criar conta.");
    }
  };

  return (
    <div className="container mx-auto p-6 sm:p-8 md:p-10 lg:p-12 max-w-md bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center">Criar Conta de Credor</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="flex flex-col items-center mb-6">
          <img
            src={profilePic || 'https://via.placeholder.com/150'}
            alt="Perfil"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2"
          />
        </div>

        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Seu nome completo"
            required
          />
        </div>

        <div>
          <label htmlFor="nuit" className="block text-sm font-medium text-gray-700">NUIT</label>
          <input
            type="text"
            id="nuit"
            name="nuit"
            value={formData.nuit}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Seu NUIT"
            required
          />
        </div>

        <div>
          <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-700">Data de Nascimento</label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="endereco" className="block text-sm font-medium text-gray-700">Endereço</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Seu endereço"
            required
          />
        </div>

        <div>
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Uma breve descrição sobre você"
            rows="4"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Seu email"
            required
          />
        </div>

        <div>
          <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Sua senha"
            required
          />
        </div>

        <div>
          <label htmlFor="confirmSenha" className="block text-sm font-medium text-gray-700">Confirmar Senha</label>
          <input
            type="password"
            id="confirmSenha"
            name="confirmSenha"
            value={formData.confirmSenha}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Confirme sua senha"
            required
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Criar Conta
          </button>
        </div>
      </form>
    </div>
  );
};
