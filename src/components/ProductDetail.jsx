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

                    <p>{product.description}</p>

                    <p className="price">
                        {product.price} €
                    </p>

                    <label>Size</label>
                    <br />
                    <select value={size} onChange={(e) => setSize(e.target.value)}>
                        <option>42</option>
                        <option>43</option>
                        <option>44</option>
                    </select>

                    <br /><br />
                    <button
                        className="add-cart"
                        onClick={() => addToCart(product, size)}
                    >   Ajouter eu panier
                        T</button>
                </div>
            </div>
        </div>
    );
}
