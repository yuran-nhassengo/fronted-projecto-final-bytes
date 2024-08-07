


const disputes = [
  { id: 1, name: 'Disputa Número : 01' },
  { id: 2, name: 'Disputa Número : 02' },
  { id: 3, name: 'Disputa Número : 03' },
  { id: 4, name: 'Disputa Número : 04' },
];

function DisputaDevedor() {
  return (
    <>
      <div className="app">
        <header className="app-header">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">Resolução de disputas</h1>
        </header>
        <div className="dispute-list space-y-4">
          {disputes.map((dispute) => (
            <div key={dispute.id} className="dispute-item p-4 bg-white rounded-lg shadow-md flex justify-between items-center">
              <p className="text-gray-700">{dispute.name}</p>
              <button className="resolve-button bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green transition duration-150 ease-in-out">
                Resolver Disputa
              </button>
            </div>
          ))}
          <button className="archive-button w-full py-2 px-4 bg-green-600 text-white font-bold rounded-md hover:bg-green transition duration-150 ease-in-out">
            Arquivar Disputa
          </button>
        </div>
      </div>
    </>
  );
}

export default DisputaDevedor;




