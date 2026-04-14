import { useState } from 'react';
import Img1 from "../assets/img/logo-nike.png";
import Img2 from "../assets/img/icone-panier.png";
import Img3 from "../assets/img/icone-search.png";
import "../assets/styles/home.css";

// import Img4 from "../assets/img/Lunarglide 6 Photosynthesis.png";
// import Img5 from "../assets/img/Nike Air Zoom Terra Shoe Render.png";
// import Img6 from "../assets/img/Nike Air Zoom Terra.png";
// import Img7 from "../assets/img/Nike Free 3.0 Photosynthesis Shoe.png";
// import Img8 from "../assets/img/Nike Lunaracer 3+ Shoe Rendering.png";
// import Img9 from "../assets/img/Nike Lunaracer 3+.png";
// import Img10 from "../assets/img/Nike Lunaracer+ 3 Shoe Isolated.png";
// import Img11 from "../assets/img/Nike-Air-Zoom-3.png";
import Img12 from "../assets/img/icons-copyright.png";

const products = [
    {
        id: 1,
        name: "Nike Lunarglide 6 Photosynthesis",
        price: 130,
        image: "/Lunarglide 6 Photosynthesis.png",
        description:
            "Chaussure de running stable et confortable.",
    },
    {
        id: 2,
        name: "Nike Air Zoom Terra Shoe Render",
        price: 110,
        image: "/Nike Air Zoom Terra Shoe Render.png",
        description: "Chaussure de running légère et réactive.",
    },
    {
        id: 3,
        name: "Nike Air Mix Zoom Terra +3",
        price: 130,
        image: "/Nike Air Zoom Terra.png",
        description: "Chaussure de running stable et polyvalente.",
    },
    {
        id: 4,
        name: "Nike Free 3.0 Photosynthesis Shoe",
        price: 100,
        image: "/Nike Free 3.0 Photosynthesis Shoe.png",
        description: "Chaussure de running flexible et naturelle.",
    },
    {
        id: 5,
        name: "Nike Lunaracer 3+ Shoe Rendering",
        price: 130,
        image: "/Nike Lunaracer 3+ Shoe Rendering.png",
        description: "Chaussure de running ultra légère et rapide.",
    },
    {
        id: 6,
        name: "Nike Max Lunaracer Running 3+",
        price: 140,
        image: "/Nike Lunaracer 3+.png",
        description: "Chaussure de running amortie et dynamique.",
    },
    {
        id: 7,
        name: "Nike Lunaracer+ 3 Shoe Isolated",
        price: 100,
        image: "/Nike Lunaracer+ 3 Shoe Isolated.png",
        description: "Chaussure de running légère et performante.",
    },
    {
        id: 8,
        name: "Nike Air Max Zoom Running 3",
        price: 130,
        image: "/Nike-Air-Zoom-3.png",
        description: "Chaussure de running confortable et amortie.",
    },
];

const MainHome = ({ onSelectProduct }) => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <div className="header">
                <div className="logo-section">
                    <img src={Img1} alt="logo" className="logo"></img>
                </div>

                <div
                    className="burger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </div>

                <ul className={`under-list-burger ${menuOpen ? "active" : ""}`}>
                    <li>MEN</li>
                    <li>WOMEN</li>
                    <li>KIDS</li>
                </ul>

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
                <div className="product-grid">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="product-card"
                            onClick={() => onSelectProduct(product)}
                        >
                            <img src={product.image} />
                            <p className="product-name">{product.name}</p>
                            <p className="product-price">{product.price} €</p>
                        </div>
                    ))}
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