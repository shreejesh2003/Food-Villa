Notes

 Note:  Whenever the state variable changes the react will re-render the component
 We can use the state variable to store the data that we want to display on the UI 
 React will keep the data sync with UI layer
 
UseEffect: Call back function will be called after rendering the intial rendering the component
Shimmer UI: 

conditional rendering
if(listOfResturent.length===0){
    return <div>Loading...</div>
}

why use useState():
To store the data that we want to display on the UI
it is an  named import from react library
Imp: Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)

useEffect():
Syntax:
useEffect(()=>{

    },[])
is called after every render of that component if there is no dependency array
Notes:
if the dependency array is empty: useEffect will called on initial render and just once first time component rendered
if the dependency array is not empty: useEffect will be called after every render of that component
if there is anything in dependency array: only called when changes in dependency

const [btnName,setBtnName]=useState()
always call inside your component body
dont  create state variable inside the function or loops
 
Path Finder:
pages
To include pages we have to install 
npm i react-router-dom
then create a object using
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />
  },
  {
    path:'/about',
    element:<About />
  },
 
])

creating our own error page
useRouteError

  {
    path:"/",
    element:<AppLayout />,
    errorElement:<Error />
  },
keeping header static
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{
      path: "/",
      element: <Body />
    }, {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    }],
    errorElement: <Error />
  },


const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  )
}

Navigate to differnt page without reloading the page:
use link from react router dom
import {Link} from 'react-router-dom'
<Link to>
Two types of routing in web apps
Client-side routing
Server-side routing

