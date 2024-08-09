import React from 'react';

export const Card = ({ title, count, color }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${color}`}>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  );
}

