





const RestaurentCard=(prop) => {
    console.log(prop);
    const {resData}=prop
   return(
    <div className='card-container'>
    {resData.map((restaurant, index) => (<div className='card'>
        <div className='res-container' >
      <div className='res-card' key={restaurant.info.id} >
        <h2>{restaurant.info.name}</h2>
        <img 
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${restaurant.info.cloudinaryImageId}`} 
          alt={`${restaurant.info.name}`} 
          style={{ width: '100px', height: '100px' }} 
        />
        <p>{restaurant.info.locality}, {restaurant.info.areaName}</p>
        <p>Cuisines: {restaurant.info.cuisines.join(', ')}</p>
        <p>Cost for Two: {restaurant.info.costForTwo}</p>
        <p>Rating: {restaurant.info.avgRatingString}</p>
        <p>Delivery Time: {restaurant.info.sla.deliveryTime} mins</p>
        <p>Distance: {restaurant.info.sla.lastMileTravelString}</p>
        
      </div>
      </div>
      </div>
    ))}
  </div>







    )
}

export default RestaurentCard