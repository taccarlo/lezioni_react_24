
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './Page/Home';
import SecondPage from './Page/SecondPage';
import ErrorElement from './Navigation/errorElement';
import RootLayout from './Page/root';

const router = createBrowserRouter([
  {
    path:'/', 
    element:<RootLayout />,
    errorElement:<ErrorElement/>,
    children:[
      {path: '/', element: <HomePage />},
      {path:'/SecondPage', element: <SecondPage/>},
    ]},
]);


//differenti path caricano differenti pagine
// npm install react-router-dom

//se vogliamo fare in modo di avere per esempio un 
// header sopra a tutti i componenti questo approccio non funziona
//bisogna modificare createBrowserRouter come segue, applichiamo anche una pagina dove andare in caso di errore
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
