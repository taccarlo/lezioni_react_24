import {Outlet} from 'react-router-dom';
import Footer from "./footer"
import Header from "./header"

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