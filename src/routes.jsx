import { createBrowserRouter } from "react-router-dom";

import {Home} from '../src/pages/home'
import {Disputa} from '../src/pages/disputa'
import {Emprestimo} from '../src/pages/emprestimo'
import {ErrorPage} from '../src/pages/error-page'
import { ConfiguracoesPage} from '../src/pages/configuracoes'
import {Empresas} from '../src/pages/empresas'
import { SignupPage } from "./pages/signup-page";

export const route = createBrowserRouter([

    {
        path:"/",
        element:<Home/>,
        errorElement:<ErrorPage/>,
    },
    {
        path:"/disputa",
        element:<Disputa/>,
    },
    {
        path:"/emprestimo",
        element:<Emprestimo/>,
    },
    {
        path:"/configuracoes",
        element:<ConfiguracoesPage/>,
    },
    {
        path:"/empresas",
        element:<Empresas/>,
    },
    {
        path:"/signup",
        element:<SignupPage/>,
    },
])

