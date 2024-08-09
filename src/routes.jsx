import { createBrowserRouter } from "react-router-dom";

import {Home} from '../src/pages/home'
//import {Disputa} from '../src/pages/disputa'
import {Emprestimo} from '../src/pages/emprestimo'
import {ErrorPage} from '../src/pages/error-page'
import { ConfiguracoesPage} from '../src/pages/configuracoes'
import { EmpresasAll} from './pages/empresas-all'
import { SignupPage } from "./pages/signup-page";
import { Login } from "./components/login";
import { ProtectedRoute } from "./components/protect-route";
import { Configuracoes } from "./components/configuracoes";
import { LoginPage } from "./pages/login-page";
import { SignupPageCredor } from "./pages/signup-page-credor";
import { CriarEmprestimo } from "./components/emprestimo/criarEmprestimo";
import { DetalhesEmprestimoDevedor } from "./components/emprestimo/detalhesEmprestimoDevedor";
import { Terms } from "./pages/termosECondicoes";
import { OfertasPage } from "./pages/ofertas-page";
import { DetalhesEmprestimoCredor } from "./components/emprestimo/detalhesEmprestimoCredor";


export const route = createBrowserRouter([

    {
        path:"/",
        element:<Home/>,
        errorElement:<ErrorPage/>,
    },
    // {
    //     path:"/disputa",
    //     element:(
    //         <ProtectedRoute>
    //             <Disputa/>
    //         </ProtectedRoute>),
    // },
    {
        path:"/emprestimo",
        element:(
            <ProtectedRoute>
                 <Emprestimo/>
            </ProtectedRoute>)
    },
    {
        path:"/configuracoes",
        element: (
            <ProtectedRoute>
                <ConfiguracoesPage />
            </ProtectedRoute>
        ),
    },
    {
        path:"/ofertas-page",
        element: (
            <ProtectedRoute>
                <OfertasPage />
            </ProtectedRoute>
        ),
    },
    {
        path:"/criar-emprestimo",
        element: (
            <ProtectedRoute>
                <CriarEmprestimo/>
            </ProtectedRoute>
        ),
    },
    {
        path:"/detalhes-emprestimo-devedor/:id",
        element: (
            <ProtectedRoute>
                <DetalhesEmprestimoDevedor/>
            </ProtectedRoute>
        ),
    },
    {
        path:"/detalhes-emprestimo-credor/:id",
        element: (
            <ProtectedRoute>
                <DetalhesEmprestimoCredor/>
            </ProtectedRoute>
        ),
    },
    {
        path:"/empresas-all",
        element:<EmpresasAll/>,
    },
    {
        path:"/signup",
        element:<SignupPage/>,
    },
    {
        path:"/login",
        element:<LoginPage/>,
    },
    {
        path:"/signup-page-credor",
        element:<SignupPageCredor/>,
    },
    {
        path:"/termosECondicoes",
        element:<Terms/>,
    },
])

