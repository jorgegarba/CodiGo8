import React, { Component, Fragment } from 'react';
import {Switch,Route} from 'react-router-dom';
import Header from './componentes/Header';
import Home from './paginas/Home';
import Contacto from './paginas/Contacto';
import Proyectos from './paginas/Proyectos';
import ProyectoVer from './paginas/ProyectoVer';
import Footer from '../Footer';
export class Invitado extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
            <Switch>
           
            <Route path={"/contacto"} render={()=>{
                return <Contacto/>
            }}/>
            <Route path={"/proyectos"} render={()=>{
                return <Proyectos/>
            }}/>
            <Route path={"/proyectover"} render={()=>{
                return <ProyectoVer/>
            }}/>
             <Route render={()=>{
                return <Home/>
            }}/>
            </Switch>
            <Footer/>
            </Fragment>
        );
    }
}

export default Invitado;
