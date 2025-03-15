import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishies } from "../../context/likeSlice";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { incCart } from "../../context/cartSlice";
import "./Sevimlilar.css";
import { ToastContainer } from "react-toastify";

const Sevimlilar = () => {
  const wishes = useSelector((state) => state.likes.value);
  const dispatch = useDispatch();

  return (
    <div className="wishes">
      <div className="container">
        {wishes.length > 0 ? (
          <div className="wishes-wrapper">
            {wishes.map((item) => {
              const isLiked = wishes.some((el) => el.id === item.id);
              return (
                <div key={item.id} className="product-item">
                  <div className="product-item-wrapper-img">
                    <Link
                      className="product-item-img"
                      to={`/product/${item.id}`}
                    >
                      <img src={item.url} alt="" />
                    </Link>
                  </div>

                  <div className="product-item-wrapper">
                    <div className="product-item-wrapper-icon">
                      <SlBasket
                        className="product-buy"
                        onClick={() => dispatch(incCart(item))}
                      />
                      <FaHeart
                        className={`product-heart ${
                          isLiked ? "liked" : "like"
                        }`}
                        onClick={() => dispatch(removeFromWishies(item))}
                      />
                    </div>
                    <div className="product-item-wrapper-text">
                      <h4>{item.title}</h4>
                      <p>{item.price}</p>
                      <mark>{item.payment}</mark>
                      <button>Muddatli to'lov</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="wishes-wrapper-undefined">
            <div className="wishes-wrapper-undefined-img">
              <img
                src={"https://olcha.uz/_nuxt/empty-img.CsNCz2BZ.png"}
                alt=""
              />
            </div>
            <h2>Sevimli mahsulotlar yo'q</h2>
            <Link to={"/"}>
              <button>Asosiy sahifaga</button>
            </Link>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Sevimlilar;
