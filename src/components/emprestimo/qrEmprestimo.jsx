import React, { useState } from 'react';
import QRCode from 'react-qr-reader';
import axios from 'axios';
import { Footer } from '../navBar';

export const LerQRCode = () => {
    const [qrData, setQrData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem('token');

    const handleScan = (data) => {
        if (data) {
            const queryParams = new URLSearchParams(data);
            const motivo = queryParams.get('motivo');
            const dataDevolucao = queryParams.get('dataDevolucao');
            const valor = queryParams.get('valor');

            setQrData({
                motivo,
                dataDevolucao,
                valor
            });
        }
    };

    const handleError = (err) => {
        console.error(err);
        setError('Erro ao ler QR Code.');
    };

    const handleConfirm = async () => {
        if (!qrData) return;

        setLoading(true);
        try {
            await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/confirmar-emprestimo`, qrData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert('Empréstimo confirmado com sucesso!');
            setQrData(null);
        } catch (error) {
            console.error('Erro ao confirmar empréstimo:', error);
            alert('Erro ao confirmar empréstimo. Por favor, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4 sm:p-6">
            <h1 className="text-2xl font-bold mb-6">Ler QR Code e Confirmar Empréstimo</h1>
            <div className="mb-6">
                <QRCode
                    onScan={handleScan}
                    onError={handleError}
                    className="w-full max-w-md mx-auto"
                />
            </div>

            {qrData && (
                <div className="mt-6">
                    <h2 className="text-lg font-medium mb-2">Detalhes do Empréstimo</h2>
                    <p><strong>Motivo:</strong> {qrData.motivo}</p>
                    <p><strong>Data de Devolução:</strong> {qrData.dataDevolucao}</p>
                    <p><strong>Valor:</strong> {qrData.valor}</p>
                    
                    <button
                        onClick={handleConfirm}
                        disabled={loading}
                        className="px-4 py-2 bg-blue text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4"
                    >
                        {loading ? 'Confirmando...' : 'Confirmar Empréstimo'}
                    </button>
                </div>
            )}

            {error && <p className="text-red-500 mt-4">{error}</p>}
            <Footer />
        </div>
    );
};
