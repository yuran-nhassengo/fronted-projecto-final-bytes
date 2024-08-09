import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className="h-screen w-60 bg-green text-white p-6">
      <h1 className="text-xl font-bold mb-6">Admin Dashboard</h1>
      <ul>
        <li className="mb-4">
          <Link to="#devedores" className="hover:text-blue">Devedores</Link>
        </li>
        <li className="mb-4">
          <Link to="#Credores" className="hover:text-blue">Credores</Link>
        </li>
        <li className="mb-4">
          <Link to="#emprestimos" className="hover:text-blue">Empréstimos</Link>
        </li>
        <li className="mb-4">
        <Link to="#disputas" className="hover:text-blue">Disputas</Link>
        </li>
        <li className="mb-4">
        <Link to="#usuarios" className="hover:text-blue">Usuários</Link>
        </li>
        <li className="mb-4">
        <Link to="#Home" className="hover:text-blue">Sair</Link>
        </li>
      </ul>
    </div>
  );
}

