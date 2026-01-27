import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const addToCart = (product, size) => {
        setCart((prev) => {
            const existing = prev.find(
                (item) => item.id === product.id && item.size === size
            );

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id && item.size === size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, { ...product, size, quantity: 1 }];
        });

        setIsOpen(true); // ouverture auto du panier
    };

    const removeFromCart = (index) => {
        setCart((prev) => prev.filter((_, i) => i !== index));
    };

    const closeCart = () => setIsOpen(false);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, isOpen, closeCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
