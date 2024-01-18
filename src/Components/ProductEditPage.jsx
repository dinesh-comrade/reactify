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
import { useForm } from "react-hook-form";

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

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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

  const onSubmit = () => {
    dispatch(
      updateProduct({ id: productId, title: newTitle, price: newPrice })
    );
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
          <form
            className="col-lg-6 edit-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${errors?.title ? "is-invalid" : ""}`}
                name="title"
                value={newTitle}
                onChange={(e) =>
                  setTitle(e.target.value.replace(/[^A-Za-z\s]/g, ""))
                }
                {...register("title", {
                  required: "title is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Only alphabetic characters are allowed",
                  },
                })}
              />
              <label htmlFor="title">Title</label>
              {errors?.title && (
                <div className="invalid-feedback">{errors.title.message}</div>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                type="number"
                className={`form-control ${errors?.price ? "is-invalid" : ""}`}
                name="price"
                value={newPrice}
                onChange={(e) =>
                  setPrice(e.target.value.replace(/[^0-9]/g, ""))
                }
                {...register("price", {
                  required: "price is required",
                  minLength: {
                    value: 1,
                    message: "Price must be given",
                  },
                  maxLength: {
                    value: 6,
                    message: "Price exceeded than limit",
                  },
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message: "Only numeric characters are allowed",
                  },
                })}
              />
              <label htmlFor="price">Price</label>
              {errors?.price && (
                <div className="invalid-feedback">{errors.price.message}</div>
              )}
            </div>
            <h3 className="text-brown">{category}</h3>
            <p>{description}</p>
            <button className="btn btn-success add-to-cart" type="submit">
              🛒 Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export { ProductEditPage };
