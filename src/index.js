import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/style/index.scss'
import {BrowserRouter} from "react-router-dom";



// npm i react-router-dom@5.3.4

//  react-router-dom  apahovum e  mer  projectin  ejeri integracia

//  mer bolor  componenter@ petq  hasaneli linen react-router-dom i mijavayrum
//  aysinqn mer amboxj project@ integrum enq react routeri koxmic stexcvac BrowserRouter componentneri nersum

// voric heto ejic ej gnalu hamar kirarum enq  LInk ev NavLink componentner@
// LInk ev NavLink nuyn componentnern en voronq apahovvum en tarberutyunn miayn ayn e vor
// NavLink uni active class


//  isk ejer@  stexcelu hamar  src  papki mej stexcum enq oages papka
//  vori mej pahum  enq ayn componentner@ voronq irencic nerkayacnum en ejer
// u ayd  componentner@ haytararum eq n switch => rout componentneri mijocov

// route componenti mijocov haytararum eqn ayn komponentner@ voronq ej en nerkayacnum
// argumentov spasum e  path parametr@ vortex nerkayacnum enq ayn linker@ voronq petq e nerkayacnen  vorpes path
// Link i mijocov parametre poixancum enq to. vori mijocov haskacnum enq te vor ej petqa routr@ sksi ashxatel


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
   </React.StrictMode>

    // React.createElement('div',{className:'test-class'},'asdasdasd')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
