// import RestaurentCard from "./RestaurantCard"

// import {useState,useEffect} from 'react'



// const Body=() => {
//     const [restaurent,setRestaurent]=
//       const [filteredres,setFilteredres]=useState([])
//     const [serachText,setSearchText]=useState("");

//       useEffect(() => {},[])
        
        


//     return(
//         <div className='body'>
//           {setFilteredres(restaurent)}
          

//             <div className='filter'>
//               <div><input type="text" className="serach-bar" value={serachText} onChange={(e)=>{
//                 setSearchText(e.target.value)
//                 const filtered=restaurent.filter(res=>res.name.toLowerCase().includes(serachText.toLowerCase()));
//                 setFilteredres(filtered)
                

//               }} />
//               <button className="search-btn" onClick={()=>{
//                 const filtered=restaurent.filter(res=>res.name.toLowerCase().includes(serachText.toLowerCase()));
               
//                 setFilteredres(filtered)

//               }}>Search</button></div>
//                 <button className="filter-btn" onClick={()=>{const filtered=restaurent.filter(res=>res.rating>4.5);
//                 setRestaurent(filtered);
//                 }}
//                 onMouseOver={()=>{
//                     console.log("hello");
//                 }}
//                 >Top Rated Restaurant</button>
//             </div>
//             <div className='res-container'>
//               {
//                 filteredres.map((res)=>{
//                   return(<RestaurentCard restaurent={res}/>)
//                 })
                
//               }
//                {/* RestaurentCard */}
               
               
               
//             </div>

//         </div>
//     )
// }

// export default Body


import RestaurentCard from "./RestaurantCard";
import { useState, useMemo, useEffect } from 'react';

const Body = () => {
    const [restaurent, setRestaurent] = useState( [
              {
                id: "1",
                name: "The Spicy Spoon",
                cuisine: ["Indian", "Chinese"],
                rating: 4.5,
                deliveryTime: "30 mins",
                costForTwo: "₹500 for two",
                imageUrl: "https://via.placeholder.com/150",
              },
              {
                id: "2",
                name: "Green Delights",
                cuisine: ["Healthy", "Salads"],
                rating: 4.2,
                deliveryTime: "25 mins",
                costForTwo: "₹400 for two",
                imageUrl: "https://via.placeholder.com/150",
              },
              {
                id: "3",
                name: "Burger Bliss",
                cuisine: ["American", "Fast Food"],
                rating: 4.8,
                deliveryTime: "20 mins",
                costForTwo: "₹350 for two",
                imageUrl: "https://via.placeholder.com/150",
              },
              {
                id: "4",
                name: "Pizza Palace",
                cuisine: ["Italian", "Pizza"],
                rating: 4.6,
                deliveryTime: "40 mins",
                costForTwo: "₹600 for two",
                imageUrl: "https://via.placeholder.com/150",
              },
              {
                id: "5",
                name: "Taco Town",
                cuisine: ["Mexican"],
                rating: 4.3,
                deliveryTime: "35 mins",
                costForTwo: "₹450 for two",
                imageUrl: "https://via.placeholder.com/150",
              },
              {
                id: "6",
                name: "Curry Corner",
                cuisine: ["Indian", "Thai"],
                rating: 4.7,
                deliveryTime: "28 mins",
                costForTwo: "₹550 for two",
                imageUrl: "https://via.placeholder.com/150",
              },
              {
                id: "7",
                name: "Sushi Spot",
                cuisine: ["Japanese", "Sushi"],
                rating: 4.9,
                deliveryTime: "22 mins",
                costForTwo: "₹700 for two",
                imageUrl: "https://via.placeholder.com/150",
              },
              {
                id: "8",
                name: "Burger King",
                cuisine: ["American", "Fast Food"],
                rating: 4.1,
                deliveryTime: "27 mins",
                costForTwo: "₹350 for two",
                imageUrl: "https://via.placeholder.com/150",
              },
              {
                id: "9",
                name: "Pasta Paradise",
                cuisine: ["Italian", "Pasta"],
                rating: 4.4,
                deliveryTime: "33 mins",
                costForTwo: "₹550 for two",
                imageUrl: "https://via.placeholder.com/150",
              },
              {
                id: "10",
                name: "Falafel Feast",
                cuisine: ["Middle Eastern"],
                rating: 4.3,
                deliveryTime: "30 mins",
                costForTwo: "₹500 for two",
                imageUrl: "https://via.placeholder.com/150",
              }
            ]);
    const [filteredres, setFilteredres] = useState(restaurent);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setFilteredres(restaurent);
    }, [restaurent]);

    const handleSearch = () => {
        const filtered = restaurent.filter(res => res.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredres(filtered);
    };

    const handleFilterTopRated = () => {
        const filtered = restaurent.filter(res => res.rating > 4.5);
        setFilteredres(filtered);
    };

    const filteredResults = useMemo(() => {
        return restaurent.filter(res => res.name.toLowerCase().includes(searchText.toLowerCase()));
    }, [searchText, restaurent]);

    return (
        <div className='body'>
            <div className='filter'>
                <div>
                    <input 
                        type="text" 
                        className="serach-bar" 
                        value={searchText} 
                        onChange={(e) =>{ const text=(e.target.value)
                          setSearchText(text)
                          handleSearch(text)
                        }
                      } 
                    />
                    <button className="search-btn" onClick={handleSearch}>
                        Search
                    </button>
                </div>
                <button className="filter-btn" onClick={handleFilterTopRated}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className='res-container'>
                {filteredres.map((res) => (
                    <RestaurentCard 
                        key={res.id} 
                        restaurent={res} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
