import RestaurentCard from "./RestaurantCard"
import { resObj } from "../utils/mockData"

const Body=() => {
    return(
        <div className='body'>

            <div className='filter'>
                <button className="filter-btn" onClick={()=>{console.log("hello");
                }}
                onMouseOver={()=>{
                    console.log("hello");
                }}
                >Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
               {/* RestaurentCard */}
               <RestaurentCard resData={resObj}/>
               
               
            </div>

        </div>
    )
}

export default Body