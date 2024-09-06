const Header=() => {
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbh6nib3X79xBOlHeU9PKQ5fy16pGPUBxkA&s' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>    

            </div>
        </div>
    )
}

export default Header