import {useState} from 'react'
import { Link } from 'react-router-dom';


const Header=() => {

    const [btn,setBtn]=useState("Login");
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbh6nib3X79xBOlHeU9PKQ5fy16pGPUBxkA&s' />
            </div>
            <div className='nav-items'>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    
                    <button id="lgn-btn" onClick={()=>{btn==="Login"?setBtn("Logout"):setBtn("Login")}}>{btn}</button>
                </ul>    

            </div>
        </div>
    )
}

export default Header