import React from 'react'
import { Footer } from '../components/navBar'
import{ Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row items-center justify-between p-16">
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="text-green text-lg font-bold">Ups! Página não encontrada</h1>
          <h2 className="text-green text-5xl font-bold mt-2">VOCÊ PARECE ESTAR PERDIDO!</h2>
          <p className="mt-4">Tente voltar à página inicial ou pesquise por algo mais específico.</p>
          <Link to="/" className="inline-block py-2 px-4 bg-green text-white font-bold rounded-md hover:bg-green-700 transition duration-150 ease-in-out mt-4">Voltar</Link>
        </div>
        <div className="flex-1 flex justify-end">
          <img src="/404.jpg" alt="imagem 404" className="w-full max-w-md h-auto" />
        </div>
    </main>


    <Footer/>
    </>
  )
}

