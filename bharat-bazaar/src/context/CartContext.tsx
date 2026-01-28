"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type CartItem = {
    id: string;
    name: string;
    price: string;
    image: string;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    notification: string | null;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [notification, setNotification] = useState<string | null>(null);

    const addToCart = (item: CartItem) => {
        setCart((prev) => [...prev, item]);
        setNotification(`Added ${item.name} to Cart`);
        setTimeout(() => setNotification(null), 3000);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, notification }}>
            {children}
            {/* Simple Toast Notification */}
            {notification && (
                <div className="fixed bottom-5 right-5 bg-foreground text-background px-6 py-3 rounded shadow-xl z-[100] animate-fade-in-up">
                    <div className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <p className="text-sm font-bold">{notification}</p>
                    </div>
                </div>
            )}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
