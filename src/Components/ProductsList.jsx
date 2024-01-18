import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setProducts } from "../Slice/productSlice";
import axios from "axios";
import { ProductComponent } from "./ProductComponent";

function ProductsListing() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const fetched = useSelector((state) => state.products.fetched);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    if (!fetched) {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => console.log(err));
      dispatch(setProducts(response.data));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div className="Loading">...Loading</div>
      ) : (
        <div className="product-listing my-5">
          <div className="container">
            <div className="row align-content-between">
              {products.map((product) => (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 py-3"
                  key={product.id}
                >
                  <ProductComponent product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { ProductsListing };
