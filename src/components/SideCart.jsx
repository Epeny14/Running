import { useCart } from "../context/CartContext";
import "../assets/styles/home.css";

export default function SideCart() {
    const { cart, removeFromCart, isOpen, closeCart } = useCart();

    return (
        <div className={`side-cart ${isOpen ? "open" : ""}`}>
            <div className="side-cart-header">
                <h2>Mon Panier</h2>
                <button onClick={closeCart}>✕</button>
            </div>

            {cart.length === 0 ? (
                <p className="empty">Votre panier est vide</p>
            ) : (
                cart.map((item, index) => (
                    <div className="side-cart-item" key={index}>
                        <img src={item.image} />
                        <div>
                            <p>{item.name}</p>
                            <small>Size {item.size}</small>
                            <p>x{item.quantity}</p>
                        </div>
                        <button onClick={() => removeFromCart(index)}>✕</button>
                    </div>
                ))
            )}
        </div>
    );
}
