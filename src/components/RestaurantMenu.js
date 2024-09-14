import { useState,useEffect } from "react"
const RestaurantMenu=() => {
    // fetch data from API
    const [resInfo,setResInfo]=useState(null)
    useEffect(()=>{
        fetchMenu();

    },[])
    const fetchMenu = async () => {
        const data=await fetch()
        const jsonData=await data.json();
        console.log(jsonData);
    }

    return(
        <div className="menu">
            <h1>Name of the Restarent</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biriyani</li>
                <li>Burger</li>
                <li>Dosa</li>

            </ul>


        </div>
    )
}
export default RestaurantMenu