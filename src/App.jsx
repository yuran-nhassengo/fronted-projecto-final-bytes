
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { route } from './routes'
import { AuthProvider } from './contexts/AuthContext'


function App() {



  return (
    <AuthProvider>
      <RouterProvider router={route}/>
    </AuthProvider>
  )
}

export default App
