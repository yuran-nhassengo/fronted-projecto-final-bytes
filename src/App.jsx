
import './App.css'
import { CompanyCard } from './components/cards/emprestimo';


function App() {

  const companyData = {
    nomeEmpresa: "Empresa Exemplo Ltda.",
    montante: "R$ 15.000,00",
    dataEnvio: "2024-07-01",
    dataPagamento: "2024-07-15",
    status: "Pago",
    juris: "São Paulo"
};

  return (
    <>
    <div className="p-4">
            <CompanyCard company={companyData} />
        </div>
    </>
  )
}

export default App
