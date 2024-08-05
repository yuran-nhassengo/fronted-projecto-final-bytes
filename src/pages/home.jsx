import React from 'react';
import { CriarEmprestimo } from '../components/criaEmprestimo/criarEmprestimo';
import { Login } from '../components/login';
import { Footer } from '../components/navBar';
import { SearchComponent } from '../components/search';
import { ConfiguracoesPage } from './configuracoes';

export const Home = () => {
    return (
        <div className="relative min-h-screen bg-gray-100">
            <SearchComponent />
            <main className="pt-16 pb-16">
             
            </main>
           
            <Footer />
        </div>
    );
};


