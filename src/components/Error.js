import { useRouteError } from "react-router-dom"

const Error=()=>{
    const error=useRouteError()

    return(
        <h1>Sorry! Something went wrong {error.data}</h1>
    )
}


export default Error