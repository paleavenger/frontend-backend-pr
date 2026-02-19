export default function ProductCard({ product }) {
    return (
        <div className="card">
            <div className="card-img-container">
                <span className="card-category">{product.category}</span>
                <img src={product.image} className="card-img" />
            </div>

            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-text">{product.description}</p>
                <p className="card-price"><strong>{product.price} $</strong></p>
                <p className="card-text">В наличии: {product.stock}</p>
                <button className="card-button"><strong>Купить</strong></button>
            </div>
        </div>
    );
}