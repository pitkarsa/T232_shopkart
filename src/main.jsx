import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login'
import Register from './Register'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

const routerArray = createBrowserRouter([
  // route objects - array of routes
  {
    // base path- context path
    // localhost:5173
    path : '',
    element : <App />,
    children :[
      {
        path:'',
        element: <Home />
      } ,     
      {
        path: 'login',
        element : <Login />
      },
      {
        path: 'register',
        element : <Register />
      },
      {
        path: 'contactus',
        element: <ContactUs />
      },
      {
        path:'aboutus',
        element: <AboutUs />
      }
    ]
  }  
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={routerArray}>
    <App />
  </RouterProvider>
)
