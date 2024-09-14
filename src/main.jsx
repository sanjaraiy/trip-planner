import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './pages/CreateTrip.jsx'
import Header from './components/Header.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>
  },
  {
    path:'/create-trip',
    element:<CreateTrip></CreateTrip>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Header></Header>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
