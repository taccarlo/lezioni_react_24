
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './Page/Home';
import SecondPage from './Page/SecondPage';
const router = createBrowserRouter ([
  {path:'/', element: <HomePage/>},
  {path:'/secondPage', element: <SecondPage/>}
  
]);
//differenti path caricano differenti pagine
// npm install react-router-dom
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
