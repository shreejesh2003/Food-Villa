





const RestaurentCard=(prop) => {
    console.log(prop);
    const {restaurent}=prop
   return(
    <div className='card-container'>
    <div className='card'>
        <div className='res-container' >
      <div className='res-card' key={restaurent.id} >
        <h2>{restaurent.name}</h2>
        <img 
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/24/801c791f-dc18-4a20-b611-524ad7fda588_946683.jpg`} 
          alt={`${restaurent.name}`} 
          style={{ width: '100px', height: '100px' }} 
        />
        <p>{restaurent.name}</p>
        <p>Cuisines: {restaurent.cuisines}</p>
        <p>Cost for Two: {restaurent.costForTwo}</p>
        <p>Rating: {restaurent.avgRatingString}</p>
        <p>Delivery Time: {restaurent.deliveryTime} mins</p>
        <p>Distance: {restaurent.lastMileTravelString}</p>
        
      </div>
      </div>
      </div>
    
  </div>







    )
}

export default RestaurentCard




