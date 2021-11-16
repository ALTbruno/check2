import { Component } from "react";
import Header from "./Header/Header";
import './Home.scss';

export default class Home extends Component{

    render(){
        return(
            <section class="home-section" id="home">

                    <Header/>

                <div class="texto-home">
                    <h2>HELLO WORLD</h2>
                    <h3>IN ANY LANGUAGE YOU LIKE</h3>
                </div>

            </section>

        )
    }

}