import {Outlet} from 'react-router-dom';
import Footer from "../Page/footer"
import Header from "../Page/header"

function RootLayout(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default RootLayout;