import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProduct,
  selectProduct,
  removeSelectedProduct,
} from "../Slice/productSlice";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductEditPage() {
  const product = useSelector((state) => state.selectedProduct);
  console.log(product);
  const { image, title, price, category, description } = product;
  console.log(title);
  const { productId } = useParams();
  console.log(productId);
  const dispatch = useDispatch();
  const [newTitle, setTitle] = useState("");
  const [newPrice, setPrice] = useState(0);
  const navigate = useNavigate();

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log(response.data);
    dispatch(selectProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "" && productId !== product.id) {
      fetchProductDetails();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({ id: productId, title: newTitle, price: newPrice })
    );
    navigate("/products");
    console.log("Newtitle: ", newTitle, "Newprice:", newPrice);
  };

  return (
    <div className="container mt-5">
      {Object.keys(product).length === 0 ? (
        <div className="Loading">...Loading</div>
      ) : (
        <div className="row product-detail">
          <div className="col-lg-6">
            <img className="img-fluid detail-img" src={image} alt={title} />
          </div>
          <form className="col-lg-6 edit-form" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                value={newTitle}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="title">Title</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="number"
                value={newPrice}
                onChange={(e) => setPrice(e.target.value)}
              />
              <label htmlFor="price">Price</label>
            </div>
            <h3 className="text-brown">{category}</h3>
            <p>{description}</p>
            <button className="btn btn-success rounded-pill px-4" type="submit">
              🛒 Update
            </button>
            <Link to="/products">
              <button
                className="btn btn-primary ms-4 rounded-pill px-4"
                type="button"
              >
                Back
              </button>
            </Link>
          </form>
        </div>
      )}
    </div>
  );
}

export { ProductEditPage };
