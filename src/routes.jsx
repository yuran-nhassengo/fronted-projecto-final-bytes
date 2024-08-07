import { createBrowserRouter } from "react-router-dom";

import {Home} from '../src/pages/home'
import {Disputa} from '../src/pages/disputa'
import {Emprestimo} from '../src/pages/emprestimo'
import {ErrorPage} from '../src/pages/error-page'
import { ConfiguracoesPage} from '../src/pages/configuracoes'
import {Empresas} from '../src/pages/empresas'
import { SignupPage } from "./pages/signup-page";
import { Login } from "./components/login";
import { ProtectedRoute } from "./components/protect-route";
import { Configuracoes } from "./components/configuracoes";
import { LoginPage } from "./pages/login-page";
import { SignupPageCredor } from "./pages/signup-page-credor";
import { CriarEmprestimo } from "./components/emprestimo/criarEmprestimo";

export const route = createBrowserRouter([

    {
        path:"/",
        element:<Home/>,
        errorElement:<ErrorPage/>,
    },
    {
        path:"/disputa",
        element:(
            <ProtectedRoute>
                <Disputa/>
            </ProtectedRoute>),
    },
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
        path:"/criar-emprestimo",
        element: (
            <ProtectedRoute>
                <CriarEmprestimo/>
            </ProtectedRoute>
        ),
    },
    {
        path:"/empresas",
        element:<Empresas/>,
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
])

