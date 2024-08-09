import React from 'react'
import { Footer } from '../components/navBar'
import{ Link } from "react-router-dom";

export const Terms = () => {
  return (
    <>
      <main className="p-6 mx-auto bg-white max-w-4xl">
        <h1 className="text-3xl font-bold text-green mb-6">Nossos Termos de Serviços e da Política de Privacidade</h1>
        <div className="border border-green p-4 rounded-lg mb-4 bg-gray-50 text-justify">
          <span className="font-bold mr-2 text-green">1.
          Aceitação dos Termos<br/></span>
          Ao acessar e utilizar a nossa aplicação web de dívidas e empréstimos ("Aplicação"), você concorda em cumprir e estar vinculado a estes Termos e Condições. Se você não concordar com qualquer parte destes termos, não use a Aplicação.
        </div>
        <div className="border border-green p-4 rounded-lg mb-4 bg-gray-50 text-justify">
          <span className="font-bold mr-2 text-green">2.
          Descrição do Serviço<br /></span>
          A Aplicação oferece serviços relacionados ao gerenciamento de dívidas e empréstimos, incluindo, mas não se limitando a, consulta de informações sobre dívidas, simulação de empréstimos e rastreamento de pagamentos. A Aplicação não é uma instituição financeira e não oferece serviços financeiros diretamente.
        </div>
        <div className="border border-green p-4 rounded-lg mb-4 bg-gray-50 text-justify">
          <span className="font-bold mr-2 text-green">3.
          Registro e Conta<br /></span>
          Para utilizar certos recursos da Aplicação, você pode precisar se registrar e criar uma conta. Você é responsável por fornecer informações precisas e manter a confidencialidade de suas credenciais de login. Você concorda em notificar-nos imediatamente sobre qualquer uso não autorizado da sua conta.
        </div>
        <div className="border border-green p-4 rounded-lg mb-4 bg-gray-50 text-justify">
          <span className="font-bold mr-2 text-green">4.
          Uso da Aplicação<br /></span>
          Você concorda em usar a Aplicação apenas para fins legais e de acordo com todas as leis e regulamentos aplicáveis. É proibido usar a Aplicação para fins fraudulentos, para enviar spam ou para comprometer a segurança da Aplicação.
        </div>
        <div className="border border-green p-4 rounded-lg mb-4 bg-gray-50 text-justify">
          <span className="font-bold mr-2 text-green">5.
          Dados e Privacidade<br /></span>
          O tratamento dos seus dados pessoais está sujeito à nossa Política de Privacidade. Ao usar a Aplicação, você concorda com a coleta, uso e compartilhamento de seus dados conforme descrito na Política de Privacidade.
        </div>
        <div className="border border-green p-4 rounded-lg mb-4 bg-gray-50 text-justify">
          <span className="font-bold mr-2 text-green">6.
          Propriedade Intelectual<br /></span>
          Todo o conteúdo e material disponível na Aplicação, incluindo textos, gráficos, logotipos, ícones e software, são de nossa propriedade ou licenciados a nós e estão protegidos por direitos autorais e outras leis de propriedade intelectual.
        </div>
        <div className="border border-green p-4 rounded-lg mb-4 bg-gray-50 text-justify">
          <span className="font-bold mr-2 text-green">7.
          Isenção de Responsabilidade<br /></span>
          A Aplicação é fornecida "no estado em que se encontra" e "conforme disponibilidade". Não garantimos que a Aplicação estará livre de erros ou que seu acesso será contínuo e ininterrupto. Não somos responsáveis por qualquer perda ou dano decorrente do uso ou da incapacidade de usar a Aplicação.
        </div>
        <div className="border border-green p-4 rounded-lg mb-4 bg-gray-50 text-justify">
          <span className="font-bold mr-2 text-green">8.
          Modificações da Aplicação e dos Termos<br /></span>
          Podemos modificar ou descontinuar a Aplicação a qualquer momento, sem aviso prévio. Reservamo-nos o direito de alterar estes Termos e Condições. É sua responsabilidade revisar periodicamente estes termos para estar ciente de quaisquer alterações.
        </div>
        <div className="border border-green p-4 rounded-lg mb-4 bg-gray-50 text-justify">
          <span className="font-bold mr-2 text-green">9.
          Limitação de Responsabilidade<br /></span>
          Na máxima extensão permitida pela lei, não seremos responsáveis por quaisquer danos indiretos, incidentais, especiais ou consequenciais, ou qualquer perda de lucros ou dados, decorrentes ou relacionados ao uso da Aplicação.
        </div>
        <div className="border border-green p-4 rounded-lg mb-4 bg-gray-50 text-justify">
          <span className="font-bold mr-2 text-green">10.
          Rescisão<br /></span>
          Podemos suspender ou encerrar sua conta e acesso à Aplicação se violar estes Termos e Condições. Após o término, você deve cessar o uso da Aplicação e, se aplicável, destruir qualquer material obtido por meio dela.
        </div>
        <div className="border border-green p-4 rounded-lg mb-4 bg-gray-50 text-justify">
          <span className="font-bold mr-2 text-green">11.
          Lei Aplicável<br /></span>
          Estes Termos e Condições são regidos pelas leis do [Seu País/Estado]. Qualquer disputa relacionada a estes termos será resolvida nos tribunais competentes da [Sua Jurisdição].
        </div>
        <div className="border border-green p-4 rounded-lg mb-4 bg-gray-50 text-justify">
          <span className="font-bold mr-2 text-green">12.
          Contato<br /></span>
          Se você tiver dúvidas sobre estes Termos e Condições, entre em contato conosco através do e-mail [seuemail@dominio.com] ou pelo endereço [Seu Endereço].
        </div>
        <div className="p-1 rounded-lg mb-12 bg-gray-50 text-justify">
          <Link to="/">
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green text-white font-bold rounded-md hover:bg-[#007a63] transition duration-150 ease-in-out"
          >
            Voltar para a Home
        </button>
        </Link>
        </div>
      </main>
    <Footer/>
    </>
  )
}

