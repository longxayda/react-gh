import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ProductDetails.css";
import payment from "../assets/payment.png";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [activeContenance, setActiveContenance] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const fetchProduct = async (id) => {
    fetch(`http://171.244.188.157:443/product/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data.data))
      .catch((error) => console.error("Error fetching product data:", error));
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    fetchProduct(id);
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  const toggleImageSize = () => {
    setIsEnlarged(!isEnlarged);
  };

  const handleContenanceClick = (index) => {
    setActiveContenance(index);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <Header />
      {product ? (
        <div className="container mt-5">
          <div className="row">
            {/* Product Image Column */}
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src={`https:${product.img_urls[0]}`}
                alt="Product"
                className={`product-image ${
                  isEnlarged ? "product-image-enlarged" : ""
                }`}
                onClick={toggleImageSize}
              />
            </div>

            {/* Product Details Column */}
            <div className="col-md-6">
              <h1>{product.name}</h1>
              <h2>{product.price[0].price}</h2>
              <label>Quantity:</label>
              <div className="mb-3 quantity-container d-flex justify-content-between w-50">
                <span className="quantity-btn" onClick={decrementQuantity}>
                  -
                </span>
                <input
                  type="number"
                  className="quantity-input mx-2"
                  value={quantity}
                  readOnly
                />
                <span className="quantity-btn" onClick={incrementQuantity}>
                  +
                </span>
              </div>

              <div className="mb-3">
                <label className="form-label d-block">Contenances</label>
                {[1, 2, 3].map((option, index) => (
                  <button
                    key={index}
                    className={`btn contenance-btn ${
                      activeContenance === index ? "active" : ""
                    }`}
                    onClick={() => handleContenanceClick(index)}
                  >
                    Option {option}
                  </button>
                ))}
              </div>

              <button className="btn btn-custom btn-cart mb-3">
                Add to Cart
              </button>
              <button className="btn btn-custom btn-shoppay">
                Pay with ShopPay
              </button>

              <div className="mt-3">
                <h4>Description</h4>
                <p>{product.description_body.join(" ")}</p>
                <p>
                  This is a great product that you will love. It has many
                  features and benefits that will make your life easier and more
                  enjoyable.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>Loading....</>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetails;
