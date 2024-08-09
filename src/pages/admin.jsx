import { SearchComponent } from '../components/search'; 
import { Footer } from '../components/navBar';  

import React from 'react';
import { Sidebar } from '../components/admin/sidebar';
import { Card } from '../components/admin/card';


export const Admin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6 text-green">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Total de Devedores" count={35} color="bg-red text-white" />
          <Card title="Total de Credores" count={45} color="bg-green text-white" />
          <Card title="Total de Empréstimos" count={120} color="bg-blue text-white" />
          <Card title="Total de Disputas" count={8} color="bg-yellow text-white" />
          <Card title="Total de Usuários" count={150} color="bg-purple-500 text-white" />
        </div>
      </div>
    </div>
  );
}





/*export const Admin = () => {

    return (
        <div className="relative min-h-screen bg-gray-100">
            <SearchComponent />
            <main className="pt-16 mt-8 pb-16">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                </div>
            </main>
            <Footer />
        </div>
    );
};
*/