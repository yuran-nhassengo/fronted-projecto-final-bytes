import React from 'react';
import { Footer } from '../components/navBar';
import { Configuracoes } from '../components/configuracoes';
import { ConfiguracoesCredor } from '../components/configuracoes/configuracoesCredor';
import { useAuth } from '../contexts/AuthContext';
import { EmprestimoCredor } from '../components/emprestimo/emprestimoCredor';
import { EmprestimoDevedor } from '../components/emprestimo/emprestimoDevedor';

export const Emprestimo = () => {
  const { user } = useAuth(); 

  
  const isCredor = user && user.tipo === 'credor'; 

  return (
    <div className="relative min-h-screen bg-gray-100">
      <main className="pt-16 mt-8 pb-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {isCredor ? <EmprestimoCredor /> : <EmprestimoDevedor />}
        </div>
      </main>
      <Footer />
    </div>
  );
};
