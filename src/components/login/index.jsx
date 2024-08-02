import { useState } from "react";



export const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('E-mail:', email);
        console.log('Senha:', senha);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        className="w-full py-2 px-4 bg-blue-600 text-blue font-bold rounded-md hover:bg-blue-700 transition duration-150 ease-in-out"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 flex justify-between text-sm text-gray-600">
                    <p to="#" className="hover:underline">Esqueceu a sua senha?</p>
                    <p to="#" className="hover:underline">Cadastre-se</p>
                </div>
            </div>
        </div>
    );
};

