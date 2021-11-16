import { Component } from "react";
import './About.scss';
import photo from './IMG_20190524_084310.jpg'
export default class About extends Component{

    render(){
        return(
            <>
            <div class="about-section" id="about">
                <div class="profile-photo">
                    <img src={photo}></img>
                </div>
                <div class="about-me-text">
                    <p>
                        Desenvolvedor Full Stack
                        fklemdlfkcn lcsn alsnclandlkA
                        AKDMASALKDÇSFHINCÇJSANCÇ;ASJNC
                        S.CXBS KHCBSAJ.CHB SA.KVCHASBCBJS
                    </p>
                </div>
            </div>
            </>
        )
    }

}