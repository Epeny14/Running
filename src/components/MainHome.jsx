import React from 'react';
import Img1 from "../assets/img/logo-nike.png";
import Img2 from "../assets/img/icone-panier.png";
import Img3 from "../assets/img/icone-search.png";
import "../assets/styles/home.css";

const MainHome = () => {
    return (
        <div>
            <div className="header">
                <div className="logo-section">
                    <img src={Img1} alt="logo" className="logo"></img>
                </div>
                <div className="section-list">
                    <ul className="under-list">
                        <li className="list-1">Men</li>
                        <li className="list-2">Women</li>
                        <li className="list-3">Kids</li>
                    </ul>
                </div>
                <div className="icon-sections">
                    <div className="under-section-1">
                        <img src={Img2} alt="shopping-basket" className="img-panier"></img>
                    </div>

                    <div className="under-section-2">
                        <img src={Img3} alt="search" className="img-search"></img>
                    </div>
                </div>
            </div>

            <div className="main-section"></div>
        </div>
    )
}

export default MainHome