import { createBrowserRouter } from 'react-router-dom';
import AddCard from '../Pages/AddCard';
import Home from '../Pages/Home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/addcard', 
    element: <AddCard />,
  },

]);

export default router;
