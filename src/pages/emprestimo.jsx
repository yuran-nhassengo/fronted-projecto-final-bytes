import React from 'react';
import { Footer } from '../components/navBar';
import { Configuracoes } from '../components/configuracoes';
import { ConfiguracoesCredor } from '../components/configuracoes/configuracoesCredor';
import { useAuth } from '../contexts/AuthContext';
import { SearchComponent } from '../components/search'; 
import { EmprestimoDevedor } from '../components/emprestimo/emprestimoDevedor';
import { EmprestimoCredor } from '../components/emprestimo/emprestimoCredor';


export const Emprestimo = () => {
  const { user } = useAuth(); 

 
  const isCredor = user && user.tipo === 'credor'; 

  const isDevedor = user && user.tipo === 'devedor'; 


  const isUnknownType = !isCredor && !isDevedor;

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
      <SearchComponent />
      <main className="flex-grow mt-20">
        <p className="font-bold text-2xl text-green text-center pt-5">Empréstimos</p>
        <div className="bg-white min-h-screen flex mt-5 justify-center">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {isCredor ? <EmprestimoCredor /> : <EmprestimoDevedor />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

