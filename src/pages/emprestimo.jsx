import React, { useState } from 'react';
import { Footer } from '../components/navBar';
import { SearchComponent } from '../components/search'; 
import { EmprestimoDevedor } from '../components/emprestimo/emprestimoDevedor';
import { EmprestimoCredor } from '../components/emprestimo/emprestimoCredor';
import { useAuth } from '../contexts/AuthContext';

export const Emprestimo = () => {
  const { user } = useAuth(); 
  const [searchTerm, setSearchTerm] = useState('');

  const isCredor = user && user.tipo === 'credor'; 
  const isDevedor = user && user.tipo === 'devedor'; 
  const isUnknownType = !isCredor && !isDevedor;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (isUnknownType) {
    return (
      <div className="relative min-h-screen bg-gray-100">
        <main className="pt-16 mt-8 pb-16">
          <div className="container mx-auto">
            <p className="text-center text-red-600 font-semibold">
              Tipo de usuário desconhecido. Verifique suas credenciais ou contate o suporte.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col mb-20">   
      <SearchComponent searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <main className="flex-grow mt-20">
        <p className="font-bold text-2xl text-green text-center pt-5">Empréstimos</p>
        <div className="bg-white min-h-screen flex mt-5 justify-center">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {isCredor ? 
              <EmprestimoCredor searchTerm={searchTerm} /> : 
              <EmprestimoDevedor searchTerm={searchTerm} />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
