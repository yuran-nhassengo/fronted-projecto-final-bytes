import React, { useState } from 'react';

export const CreateOfferForm = () => {
  
    const [nomeOferta, setNomeOferta] = useState('');
    const [taxaJuros, setTaxaJuros] = useState('');
    const [descricao, setDescricao] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

      
        console.log('Nome da Oferta:', nomeOferta);
        console.log('Taxa de Juros:', taxaJuros);
        console.log('Descrição:', descricao);

        setNomeOferta('');
        setTaxaJuros('');
        setDescricao('');
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">Criar Oferta</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
          
                <div>
                    <label htmlFor="nomeOferta" className="block text-gray-700 text-sm font-medium mb-1">Nome da Oferta</label>
                    <input
                        type="text"
                        id="nomeOferta"
                        value={nomeOferta}
                        onChange={(e) => setNomeOferta(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
             
                <div>
                    <label htmlFor="taxaJuros" className="block text-gray-700 text-sm font-medium mb-1">Taxa de Juros (%)</label>
                    <input
                        type="number"
                        id="taxaJuros"
                        value={taxaJuros}
                        onChange={(e) => setTaxaJuros(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
              
                <div>
                    <label htmlFor="descricao" className="block text-gray-700 text-sm font-medium mb-1">Descrição</label>
                    <textarea
                        id="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
               
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-150 ease-in-out"
                >
                    Criar Oferta
                </button>
            </form>
        </div>
    );
};