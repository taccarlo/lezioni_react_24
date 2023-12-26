
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './Page/Home';
const router = createBrowserRouter ([
  {path:'/', element: <HomePage/>},
]);
//differenti path caricano differenti pagine
// npm install react-router-dom
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
