
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { route } from './routes'



function App() {



  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
