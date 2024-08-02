
import './App.css'
import { CompanyCard } from './components/cards/emprestimo';
import { CompanyProfileCard } from './components/cards/ofertas';



function App() {

  const companyData = {
    nomeEmpresa: "Empresa Exemplo Ltda.",
    montante: "R$ 15.000,00",
    dataEnvio: "2024-07-01",
    dataPagamento: "2024-07-15",
    status: "Pago",
    juris: "São Paulo"
};

const companyData2 = {
  foto: 'https://via.placeholder.com/64', 
  nomeEmpresa: 'Empresa Exemplo Ltda.',
  descricao: 'Uma breve descrição da empresa. Fornecemos soluções inovadoras e serviços de alta qualidade.'
};

  return (
    <>
    <div className="p-4">
            <CompanyCard company={companyData} />
            <CompanyProfileCard company={companyData2} />
        </div>
    </>
  )
}

export default App
