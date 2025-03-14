import "./Products.css";
import { Data } from "../../mock/product";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { incCart } from "../../context/cartSlice";
import { ToastContainer } from "react-toastify";
import { memo, useState } from "react";
import { addToWishies, removeFromWishies } from "../../context/likeSlice";
const Products = () => {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  const wishes = useSelector((state) => state.likes.value);

  const handleLike = (item) => {
    if (wishes.some((el) => el.id === item.id)) {
      dispatch(removeFromWishies(item));
    } else {
      dispatch(addToWishies(item));
    }
  };

  return (
    <div className="container">
      <div className="product">
        <div className="product-img">
          <img
            src={
              "https://olcha.uz/image/460x152/homePage/cdn_1/2025-03-04/X2ckhhQIq86ZuWGBEjv0Q4zWoCWENIJvZ4szw91JMXJKrWkYqWAEOprqdigy.jpg"
            }
            alt=""
          />
          <img
            src={
              "https://olcha.uz/image/460x152/homePage/cdn_1/2025-03-04/XxKCcjtNNbvkbKgtil9FcIgxTg0qHY7cKBx942ZbNgG3L1fAbayWXzLZV1F6.jpg"
            }
            alt=""
          />
          <img
            src={
              "https://olcha.uz/image/460x152/homePage/cdn_1/2025-03-04/Z7IPjvspAgfMyJJDZ5PF5EtsnV7Or0xwkymSFsjEOVi4E6rP0QTlWMR2uXlG.jpg"
            }
            alt=""
          />
        </div>
        <div className="product-wrapper">
          {Data.map((item, index) => {
            return (
              <div className="product-card" key={index}>
                <div className="product-card-img">
                  <Link to={`/product/${item.id}`}>
                    <img src={item.url} alt="" />
                  </Link>
                  <div className="product-card-img-icon">
                    <FaRegHeart
                      className={`product-heart ${
                        wishes.some((el) => el.id === item.id) ? "liked" : ""
                      }`}
                      onClick={() => handleLike(item)}
                    />
                  </div>
                </div>
                <div className="product-card-title">
                  <h2>{item.title}</h2>
                  <div className="product-card-price">
                    <h3>{item.price}</h3>
                    <del>{item.sale}</del>
                  </div>
                  <mark>{item.payment}</mark>
                  <div className="product-card-icon">
                    <div>
                      <button
                        className="product-card-icoon"
                        onClick={() => dispatch(incCart(item))}
                      >
                        <SlBasket />
                      </button>
                    </div>
                    <button>Muddatli to'lov</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default memo(Products);
