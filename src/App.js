import React from "react";
import './App.css'
import Text from "./components/Text";
import Modal from "./components/modal";
import {Link,NavLink, Route, Router, Switch} from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Redirect from "react-router-dom/es/Redirect";
import Error from "./pages/Error";
import Header from "./components/header/header";
import {RoutersList} from "./router";

class App extends React.Component {


    //  Link, NavLink
    render() {
        return <div>
            <Header/>
            <div className={'pages'}>
                <Switch>
                    <Route path={RoutersList.HOME} >
                        <Home/>
                    </Route>
                    <Route path={RoutersList.CONTACT_US} ><ContactUs/></Route>
                    <Route path={RoutersList.SERVICES} ><Services/></Route>
                    <Route path={RoutersList.ERROR} ><Error/></Route>

                    <Redirect to={'/error'}/>
                </Switch>
            </div>
        </div>
    }

}

export default App

