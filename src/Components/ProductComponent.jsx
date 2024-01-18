import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../Slice/productSlice";

function ProductComponent({ product }) {
  const dispatch = useDispatch();
  const { id, title, image, price, category } = product;

  const handleDelete = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="card h-100" key={id}>
      <Link to={`/products/${id}`}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-price">$ {price}</div>
          <p className="card-text">{category}</p>
          <button className="btn btn-primary rounded-pill">Add to Cart</button>
        </div>
      </Link>
      <div className="d-flex mt-2 justify-content-around">
        <Link to={`/products/${id}&edit`}>
          <button className="btn btn-success rounded-pill px-4">Edit</button>
        </Link>
        <button
          className="btn btn-danger rounded-pill px-4"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export { ProductComponent };
