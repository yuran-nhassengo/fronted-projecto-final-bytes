import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HeaderNav } from '../header';

export const Configuracoes = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    bilhete: '',
    genero: '',
    nascimento: '',
    endereco: '',
    email: '',
    id: "",
    senha: ''
  });
  const [isEditing, setIsEditing] = useState(false); 

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token não encontrado');
        return;
      }

      try {

        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/get-devedor`, {

          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        console.log(response.data);

        const user = response.data;

        console.log(user.data.name)
        setProfilePic(user.profilePic || 'https://via.placeholder.com/150');
        setFormData({
          name: user.data.name || '',
          bilhete: user.data.bi || '',
          genero: user.data.genero || '',
          nascimento: user.data.data || '',
          endereco: user.data.endereco || '',
          email: user.data.email || '',
          id: user.data._id || '',
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

  const handleEditClick = () => {
    setIsEditing(!isEditing); 
  };

  const handleSaveClick = async () => {
    const token = localStorage.getItem('token');

    console.log(formData );

    if (!token) {
      console.error('Token não encontrado');
      return;
    }

    try {

      await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/devedor/update`, formData, {

        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setIsEditing(false); 
    } catch (error) {
      console.error('Erro ao atualizar dados do usuário', error);
    }
  };

  return (
    <div className="container items-center mx-auto p-4 sm:p-6">
      <HeaderNav title={'Configurações'} currentUserName={formData.name} currentUserId={formData.id} />
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
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                disabled={!isEditing} 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="bilhete" className="block text-sm font-medium text-gray-700">
                Bilhete
              </label>
              <input 
                type="text" 
                id="bilhete" 
                name="bilhete" 
                value={formData.bilhete} 
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Seu bilhete"
              />
            </div>

            <div>
              <label htmlFor="genero" className="block text-sm font-medium text-gray-700">
                Gênero
              </label>
              <input 
                type="text" 
                id="genero" 
                name="genero" 
                value={formData.genero} 
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Seu gênero"
              />
            </div>

            <div>
              <label htmlFor="nascimento" className="block text-sm font-medium text-gray-700">
                Data de Nascimento
              </label>
              <input 
                type="date" 
                id="nascimento" 
                name="nascimento" 
                value={formData.nascimento} 
                onChange={handleChange}
                disabled={!isEditing}
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
                value={formData.endereco} 
                onChange={handleChange}
                disabled={!isEditing}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Seu email"
              />
            </div>

            <div className="flex justify-center mt-6">
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
  );
};
