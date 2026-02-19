import { useEffect, useState } from "react";
import { api } from "../api";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal.jsx";
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

    const [modalOpen, setModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState("create");
    const [editingProduct, setEditingProduct] = useState(null);

    const openCreate = () => {
        setModalMode("create");
        setEditingProduct(null);
        setModalOpen(true);
    };

    const openEdit = (product) => {
        setModalMode("edit");
        setEditingProduct(product);
        setModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Удалить товар?")) return;

        await api.deleteProduct(id);
        loadProducts();
    };

    const handleSubmit = async (data) => {
        if (modalMode === "create") {
            await api.createProduct(data);
        } else {
            await api.updateProduct(editingProduct.id, data);
        }

        setModalOpen(false);
        loadProducts();
    };

    return (
        <>
            <header className="header">
                <div className="header-inner">
                    Игровой Магазин IGRAI.RU
                </div>
                <button className="add-button" onClick={openCreate}>
                    + Добавить товар
                </button>
            </header>

            <div className="page-container">
                <div className="cards">
                    {products.map(p => (
                        <ProductCard key={p.id} product={p} onEdit={openEdit} onDelete={handleDelete}/>
                    ))}
                </div>
            </div>
            <ProductModal
                open={modalOpen}
                mode={modalMode}
                initialData={editingProduct}
                onClose={() => setModalOpen(false)}
                onSubmit={handleSubmit}
            />
        </>
    );
}