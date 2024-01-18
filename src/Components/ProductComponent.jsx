import { Link } from "react-router-dom";

function ProductComponent({ product }) {
  const { id, title, image, price, category } = product;
  return (
    <div className="card h-100" key={id}>
      <Link to={`/products/${id}`}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-price">$ {price}</div>
          <p className="card-text">{category}</p>
          <button className="btn btn-primary rounded-pill">Add to Cart</button>
          <div className="d-flex mt-2 justify-content-around">
            <button className="btn btn-success rounded-pill px-4">Edit</button>
            <button className="btn btn-danger rounded-pill px-4">Delete</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export { ProductComponent };
