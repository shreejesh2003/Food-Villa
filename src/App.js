import ReactDOM, { createRoot } from 'react-dom/client';
import React from 'react'
import Header from './components/Header'
import Body from './components/Body';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';






const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '200px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '10px',
  },
};


const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{
      path: "/",
      element: <Body />
    }, {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    }],
    errorElement: <Error />
  },


])

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 
