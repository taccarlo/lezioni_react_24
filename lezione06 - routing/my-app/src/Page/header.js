import {Link} from 'react-router-dom';

function Header(){
   return( 
        <>
         <h3>Header</h3>
         <Link to="/">vai alla home</Link>
         {' '}
         <Link to="/SecondPage">vai alla seconda pagina</Link>
        </>
      ); 
}
export default Header;