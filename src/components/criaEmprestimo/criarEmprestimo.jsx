import React, { useState } from 'react';

export const CriarEmprestimo = () => {
 
    const [empresa, setEmpresa] = useState('');
    const [motivo, setMotivo] = useState('');
    const [dataDevolucao, setDataDevolucao] = useState('');
    const [valor, setValor] = useState('');

  
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log({
            empresa,
            motivo,
            dataDevolucao,
            valor,
        });
    };

    return (
        <div className="container mx-auto p-4 sm:p-6">
            <h1 className="text-2xl font-bold mb-6">Criar Empréstimo</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              
                <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700">
                        Empresa
                    </label>
                    <select
                        id="empresa"
                        name="empresa"
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="">Selecione uma empresa</option>
                        <option value="empresa1">Empresa 1</option>
                        <option value="empresa2">Empresa 2</option>
                        <option value="empresa3">Empresa 3</option>
                      
                    </select>
                </div>

           
                <div>
                    <label htmlFor="motivo" className="block text-sm font-medium text-gray-700">
                        Motivo
                    </label>
                    <textarea
                        id="motivo"
                        name="motivo"
                        value={motivo}
                        onChange={(e) => setMotivo(e.target.value)}
                        rows="4"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Descreva o motivo do empréstimo"
                    />
                </div>

               
                <div>
                    <label htmlFor="dataDevolucao" className="block text-sm font-medium text-gray-700">
                        Data de Devolução
                    </label>
                    <input
                        type="date"
                        id="dataDevolucao"
                        name="dataDevolucao"
                        value={dataDevolucao}
                        onChange={(e) => setDataDevolucao(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

             
                <div>
                    <label htmlFor="valor" className="block text-sm font-medium text-gray-700">
                        Valor
                    </label>
                    <input
                        type="number"
                        id="valor"
                        name="valor"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-red rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Insira o valor"
                    />
                </div>

                
                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue text-white rounded-md shadow-sm hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};