import Header from "./Header"
import Footer from "./Footer";
import {Outlet} from "react-router-dom"
export default function HomeLayout(){
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}