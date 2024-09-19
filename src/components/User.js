import { useState } from "react";
const User=({name}) => {
    const [count,setCount]=useState(0)

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <h1>User:{name}</h1>
        </div>
    )
}
export default User;