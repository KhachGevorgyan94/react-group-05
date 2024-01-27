import './App.css'
import {useEffect} from "react";
import {Navigate, NavLink, Route, Routes, useLocation} from "react-router-dom";
import {Home} from "./pages/Home";
import {Services} from "./pages/Services";
import {Contact} from "./pages/Contact";
import {routerList} from "./routers/routers";
import {ProductDetails} from "./pages/ProductDetails";
import {ServicesContact} from "./pages/ServicesContact";
import {InputForms} from "./pages/InputForms/InputForms";

function App() {

    const location = useLocation()

    useEffect(() => {

        window.scrollTo(0, 0)

    }, [location.pathname]);

    return <div>
        <header>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/services'}>Services</NavLink>
                </li>
                <li>
                    <NavLink to={'/services/contact'}>Services Contact</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>Contacts</NavLink>
                </li> <li>
                    <NavLink to={'/input-form'}>Inputs</NavLink>
                </li>

            </ul>
        </header>


        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/services'} element={<Services/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
            <Route path={routerList.PRODUCT_DETAILS} element={<ProductDetails/>}/>
            <Route path={'/services/contact'} element={<ServicesContact/>}/>
            <Route path={'/input-form'} element={<InputForms/>}/>
            <Route path={'/*'} element={<Navigate to={'/services'}/>}></Route>
        </Routes>
    </div>

    // https://www.list.am/item/19899283
}


export default App
