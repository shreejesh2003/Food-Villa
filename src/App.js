import ReactDOM,{ createRoot } from 'react-dom/client';
import React from 'react'
import Header from './components/Header'
import Body from './components/Body';







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







const AppLayout=() => {
    return(
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}



const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />); 
