export default function ProductCard({ product, onEdit, onDelete }) {
    return (
        <div className="card">
            <div className="card-img-container">
                <img src={product.image} className="card-img" />
            </div>

            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>

                <p className="card-text">{product.description}</p>

                <p className="card-price">
                    <strong>{product.price} $</strong>
                </p>

                <div className="admin-buttons">
                    <button onClick={() => onEdit(product)}>
                        Изменить
                    </button>

                    <button onClick={() => onDelete(product.id)}>
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    );
}