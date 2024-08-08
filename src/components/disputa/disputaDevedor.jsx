import React from 'react';

const disputaCredor = [
  { id: 1, nome: 'Credor 1', valor: 1000, status: 'Pendente' },
  { id: 2, nome: 'Credor 2', valor: 2000, status: 'Resolvido' },
  { id: 3, nome: 'Credor 3', valor: 1500, status: 'Pendente' },
];

const DisputaCredor = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Disputas de Credores</h1>
      {disputaCredor.map((credor) => (
        <div key={credor.id} style={styles.box}>
          <p style={styles.text}>Nome: {credor.nome}</p>
          <p style={styles.text}>Valor: {credor.valor}</p>
          <p style={styles.text}>Status: {credor.status}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  box: {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  text: {
    margin: '5px 0',
  },
};

export default DisputaCredor;





