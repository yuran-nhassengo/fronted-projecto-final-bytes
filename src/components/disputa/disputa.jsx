// // /src/pages/disputa.jsx
// import React, { useState, useEffect } from 'react';

// export const Disputa = () => {
//   const [disputas, setDisputas] = useState([]);

//   useEffect(() => {
//     // Fetch disputas data from API
//     fetch(`${import.meta.env.VITE_API_BASE_URL}/api/disputas`)
//       .then(response => response.json())
//       .then(data => setDisputas(data))
//       .catch(error => console.error('Erro ao buscar disputas:', error));
//   }, []);

//   return (
//     <div className="disputa-page">
//       <header>
//         <h1>Página de Disputas</h1>
//       </header>
//       <div className="disputa-list">
//         {disputas.map(disputa => (
//           <DisputaBox
//             key={disputa.id}
//             id={disputa.id}
//             description={disputa.description}
//             status={disputa.status}
//             onResolve={() => {
//               // Função para resolver a disputa
//               fetch(`${import.meta.env.VITE_API_BASE_URL}/api/disputas/${disputa.id}/resolver`, { method: 'POST' })
//                 .then(response => response.json())
//                 .then(() => {
//                   setDisputas(disputas.filter(d => d.id !== disputa.id));
//                 })
//                 .catch(error => console.error('Erro ao resolver disputa:', error));
//             }}
//           />
//         ))}
//       </div>
//       <style jsx>{`
//         .disputa-page {
//           font-family: Arial, sans-serif;
//           padding: 20px;
//         }

//         .disputa-list {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 20px;
//         }

//         .disputa-box {
//           border: 1px solid #ddd;
//           border-radius: 8px;
//           padding: 20px;
//           width: 300px;
//           background-color: #f9f9f9;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }

//         .disputa-box:hover {
//           background-color: #e0e0e0;
//         }

//         button {
//           margin-top: 10px;
//           padding: 10px;
//           background-color: #007bff;
//           color: white;
//           border: none;
//           border-radius: 4px;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }

//         button:hover {
//           background-color: #0056b3;
//         }
//       `}</style>
//     </div>
//   );
// };

// export const DisputaBox = ({ id, description, status, onResolve }) => {
//   return (
//     <div className="disputa-box">
//       <h2>Disputa {id}</h2>
//       <p>{description}</p>
//       <p>Status: {status}</p>
//       <button onClick={onResolve}>Resolver Disputa</button>
//     </div>
//   );
// };


