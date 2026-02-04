import "../assets/styles/home.css";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductDetail({ product, onClose }) {
    const { addToCart } = useCart();
    const [size, setSize] = useState("42");

    if (!product) return null;

    return (
        <div className="description-grid">
            <div className="product-detail">
                <button className="close-btn" onClick={onClose}>
                    ✕
                </button>

                <img src={product.image} width={350} />

                <div className="product-info">
                    <h1 className="title-product">{product.name}</h1>

                    <hr className="line"></hr>

                    <p className="text-description">{product.description}</p>

                    <p className="price">
                        {product.price} €
                    </p>

                    <div className="section-cart">
                        <label>Size</label>
                        <br />
                        <select className="section-size" value={size} onChange={(e) => setSize(e.target.value)}>
                            <option>42</option>
                            <option>43</option>
                            <option>44</option>
                        </select>

                        <br /><br />
                        <button
                            className="add-cart"
                            onClick={() => addToCart(product, size)}
                        >
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
