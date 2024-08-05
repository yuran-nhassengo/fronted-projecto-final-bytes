import React from 'react'


import { Footer } from '../components/navBar'
import { Configuracoes } from '../components/configuracoes'
import { HeaderNav } from '../components/header'

export const ConfiguracoesPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
    <HeaderNav title={'Configuracoes'}/>
    <main className="pt-16 mt-8 pb-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
           Configuracoes
        </div>
    </main>
    <Footer />
</div>
  )
}

