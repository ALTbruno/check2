import { Component } from "react";
import './Header.scss';

export default class Header extends Component{

    render(){
        return(
            <>
            <div class="header">
                <navbar class="navbar">
                    <div class="logo">
                        <a href="#home"><img src="https://logosvg.org/wp-content/uploads//2020/02/logo-svg.svg" alt="Logo" class="logo"/></a>
                    </div>                
                    <ul class="navbar-items">
                        <li class="navbar-item"><a href="#about">Sobre</a></li>
                        <li class="navbar-item"><a href="#projects">Projetos</a></li>
                        <li class="navbar-item"><a href="#contact">Contato</a></li>
                    </ul>
                </navbar>
            </div>
            </>
        )
    }

}