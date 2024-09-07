





const RestaurentCard=(prop) => {
    console.log(prop);
    const {restaurent}=prop
   return(
    <div className='card-container'>
    {restaurent.map((rest, index) => (<div className='card'>
        <div className='res-container' >
      <div className='res-card' key={rest.id} >
        <h2>{rest.name}</h2>
        <img 
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/24/801c791f-dc18-4a20-b611-524ad7fda588_946683.jpg`} 
          alt={`${rest.name}`} 
          style={{ width: '100px', height: '100px' }} 
        />
        <p>{rest.name}</p>
        <p>Cuisines: {rest.cuisines}</p>
        <p>Cost for Two: {rest.costForTwo}</p>
        <p>Rating: {rest.avgRatingString}</p>
        <p>Delivery Time: {rest.deliveryTime} mins</p>
        <p>Distance: {rest.lastMileTravelString}</p>
        
      </div>
      </div>
      </div>
    ))}
  </div>







    )
}

export default RestaurentCard




