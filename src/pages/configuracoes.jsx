import React from 'react';
import { Footer } from '../components/navBar';
import { Configuracoes } from '../components/configuracoes';
import { ConfiguracoesCredor } from '../components/configuracoes/configuracoesCredor';
import { useAuth } from '../contexts/AuthContext';

export const ConfiguracoesPage = () => {
  const { user } = useAuth(); 

  
  const isCredor = user && user.tipo === 'credor'; 

  return (
    <div className="flex items-center  justify-center">
      <main className="pt-16 mt-8 pb-16">
        <div className="container mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {isCredor ? <ConfiguracoesCredor /> : <Configuracoes />}
        </div>
      </main>
      <Footer />
    </div>
  );
};
