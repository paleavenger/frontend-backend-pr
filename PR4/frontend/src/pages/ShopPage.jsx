import { useEffect, useState } from "react";
import { api } from "../api";
import ProductCard from "../components/ProductCard";
import "../styles/main.css";

export default function ShopPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const data = await api.getProducts();
        setProducts(data);
    };

    return (
        <>
            <header className="header">
                <div className="header-inner">
                    Игровой Магазин IGRAI.RU
                </div>
            </header>

            <div className="page-container">
                <div className="cards">
                    {products.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </>
    );
}