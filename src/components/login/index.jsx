import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";



export const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); 
    
        try {
          const response = await axios.post('http://192.168.0.233:8000/api/devedor/login', {
            email,
            senha
          });
    
          console.log('Resposta da API:', response.data);
          
          localStorage.setItem('token', response.data.token);
          console.log('Login bem-sucedido:', response.data);
    
          
          window.location.href = '/emprestimo'; 
        } catch (err) {
          console.error('Falha no login:', err.response?.data?.message || err.message);
          setError('Nome de usuário ou senha inválidos');
        }
      };

    return (

        <div className="flex h-screen">
        <div className="flex flex-col justify-center items-center w-1/2 bg-[#00A86B] text-white p-8">
            <h1 className="text-4xl font-bold mb-4 text-center">Bem-Vindo Div-just!</h1>
            <p className="text-lg text-center">
                Obrigado por escolher a Div-just. Estamos ansiosos para ajudar você a atingir seus objetivos financeiros!
            </p>
        </div>
        <div className="flex justify-center items-center w-1/2 bg-white p-8">
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 text-green-2">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="senha" className="block text-gray-700 text-sm font-medium mb-1">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-[#00A86B] text-white font-bold rounded-md hover:bg-[#007a63] transition duration-150 ease-in-out"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 flex justify-between text-sm text-gray-600">
                    <Link to="#" className="hover:underline">Esqueceu a sua senha?</Link>
                    <Link to="/signup" className="hover:underline">Cadastre-se</Link>
                </div>
            </div>
        </div>
    </div>     
    );
};

