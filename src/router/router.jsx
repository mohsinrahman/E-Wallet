import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import AddCard from '../pages/AddCard';
import Vendors from '../pages/Vendors';
import AppData from '../AppData.json';


function fetchData(){
 // return fetch(JSON.parse(JSON.stringify(AppData)))
 //return fetch('https://dummyjson.com/products')
  //.then(response => response.json());
  return JSON.parse(JSON.stringify(AppData))
}


const router = createBrowserRouter([
   
   
    {
        path: '*',
        element: <ErrorPage />
        
    },
    {
        path: '/',
        element: <Home />,
        loader : fetchData
        
    },
    {
        path: '/addcard',
        element: <AddCard />,
        loader : fetchData
    }
    ,
    {
        path: '/vendors',
        element: <Vendors />
    }
]);

export default router;