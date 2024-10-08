import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HeaderNav } from '../header';


export const ConfiguracoesCredor = () => {
  const [formData, setFormData] = useState({
    nomeEmpresa: '',
    nuit: '',
    endereco: '',
    senha: '',
    email: '',
    confirmSenha: ''
  });
  const [isEditing, setIsEditing] = useState(false); 
  const [error, setError] = useState('');
  const [profilePic, setProfilePic] = useState('https://via.placeholder.com/150'); 

  useEffect(() => {
    const fetchCredorData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token não encontrado');
        return;
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/credor`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = response.data;

        

        console.log(data);
        setFormData({
          nomeEmpresa: data.nomeEmpresa || '',
          nuit: data.nuit || '',
          endereco: data.endereco || '',
          email: data.email || '',
          senha: '',
          confirmSenha: ''
        });
        setProfilePic(data.profilePic || 'https://via.placeholder.com/150'); 
      } catch (error) {
        console.error('Erro ao buscar dados do credor', error);
        setError('Erro ao buscar dados do credor');
      }
    };

    fetchCredorData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveClick = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token não encontrado');
      return;
    }

    try {
      await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/credor/update`, formData, {

        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setIsEditing(false); 
    } catch (error) {
      console.error('Erro ao atualizar dados do credor', error);
      setError('Erro ao atualizar dados do credor');
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing); 
  };

  return ( 
    <div className="flex flex-col">
      <HeaderNav title="Configurações do Credor"/>
      <div className="container mt-10 mx-auto p-4 sm:p-6 flex-grow rounded-lg shadow-2xl">
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
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => setProfilePic(reader.result);
                  reader.readAsDataURL(file);
                }
              }} 
              className="mt-4"
            />
          </div>

          <div className="w-full max-w-md">
            <form className="space-y-4">
              <div>
                <label htmlFor="nomeEmpresa" className="block text-sm font-medium text-gray-700">
                  Nome da Empresa
                </label>
                <input 
                  type="text" 
                  id="nomeEmpresa" 
                  name="nomeEmpresa" 
                  value={formData.nomeEmpresa} 
                  onChange={handleChange}
                  disabled={!isEditing} 
                  className="mt-1 block w-full px-3 py-2 border border-gray {/*bg-slate-200*/} rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-green sm:text-sm"
                  placeholder="Nome da empresa"
                />
              </div>

              <div>
                <label htmlFor="nuit" className="block text-sm font-medium text-gray-700">
                  NUIT
                </label>
                <input 
                  type="text" 
                  id="nuit" 
                  name="nuit" 
                  value={formData.nuit} 
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="mt-1 block w-full px-3 py-2 border border-gray rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-green sm:text-sm"
                  placeholder="Seu NUIT"
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
                  value={formData.endereco} 
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="mt-1 block w-full px-3 py-2 border border-gray rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-green sm:text-sm"
                  placeholder="Seu endereço"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="mt-1 block w-full px-3 py-2 border border-gray rounded-md shadow-sm focus:outline-none focus:ring-blue focus:border-green sm:text-sm"
                  placeholder="Seu email"
                />
              </div>

              <div className="flex justify-center ">
                <button 
                  type="button" 
                  onClick={isEditing ? handleSaveClick : handleEditClick}
                  className={`px-4 py-2 ${isEditing ? 'bg-green hover:bg-[#007a63]' : 'bg-blue hover:bg-[#007a63]'} text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                >
                  {isEditing ? 'Salvar' : 'Editar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
