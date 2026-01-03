import React from 'react';
import Img1 from "../assets/img/logo-nike.png";
import Img2 from "../assets/img/icone-panier.png";
import Img3 from "../assets/img/icone-search.png";
import "../assets/styles/home.css";
import Img4 from "../assets/img/Lunarglide 6 Photosynthesis.png";
import Img5 from "../assets/img/Nike Air Zoom Terra Shoe Render.png";
import Img6 from "../assets/img/Nike Air Zoom Terra.png";
import Img7 from "../assets/img/Nike Free 3.0 Photosynthesis Shoe.png";
import Img8 from "../assets/img/Nike Lunaracer 3+ Shoe Rendering.png";
import Img9 from "../assets/img/Nike Lunaracer 3+.png";
import Img10 from "../assets/img/Nike Lunaracer+ 3 Shoe Isolated.png";
import Img11 from "../assets/img/Nike-Air-Zoom-3.png";
import Img12 from "../assets/img/icons-copyright.png";

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

                    <span className="separator"></span>

                    <div className="under-section-2">
                        <img src={Img3} alt="search" className="img-search"></img>
                    </div>
                </div>
            </div>

            <div className="main-section"></div>

            <div className="section-shoes">
                <div className="under-shoes-1">
                    <div className="article-1">
                        <img src={Img4} alt="nike-1" className="photosynthesis"></img>
                        <h4 className="title-1">Nike Lunarglide 6 Photosynthesis</h4>
                        <p className="price-1">130 €</p>
                    </div>
                    <div className="article-2">
                        <img src={Img5} alt="nike-2" className="air-zoom"></img>
                        <h4 className="title-2">Nike Air Zoom Terra Shoe Render</h4>
                        <p className="price-2">110 €</p>
                    </div>
                    <div className="article-3">
                        <img src={Img6} alt="nike-3" className="zoom-terra"></img>
                        <h4 className="title-3">Nike Air Zoom Terra</h4>
                        <p className="price-3">130 €</p>
                    </div>
                    <div className="article-4">
                        <img src={Img7} alt="nike-4" className="photosynthesis-2"></img>
                        <h4 className="title-4">Nike Free 3.0 Photosynthesis Shoe</h4>
                        <p className="price-4">100 €</p>
                    </div>
                </div>
                <div className="under-shoes-2">
                    <div className="article-5">
                        <img src={Img8} alt="nike-5" className="rendering"></img>
                        <h4 className="title-5">Nike Lunaracer 3+ Shoe Rendering</h4>
                        <p className="price-5">130 €</p>
                    </div>
                    <div className="article-6">
                        <img src={Img9} alt="nike-6" className="lunaracer"></img>
                        <h4 className="title-6">Nike Lunaracer 3+</h4>
                        <p className="price-6">140 €</p>
                    </div>
                    <div className="article-7">
                        <img src={Img10} alt="nike-7" className="isolated"></img>
                        <h4 className="title-7">Nike Lunaracer+ 3 Shoe Isolated</h4>
                        <p className="price-7">100 €</p>
                    </div>
                    <div className="article-8">
                        <img src={Img11} alt="nike-8" className="zoom-air"></img>
                        <h4 className="title-8">Nike Air Zoom 3</h4>
                        <p className="price-8">130 €</p>
                    </div>
                </div>
            </div>

            <div className="footer-section">
                <div className="under-footer">
                    <img src={Img12} alt="copyright-icon" className="img-copyright"></img>
                    <h6 className="title-9">Running</h6>
                    <p className="paragraph-1">2026</p>
                </div>
            </div>
        </div>
    )
}

export default MainHome