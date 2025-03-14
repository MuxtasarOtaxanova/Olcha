import "./Savatcha.css";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import {
  decCart,
  incCart,
  removeAllCart,
  removeCart,
} from "../../context/cartSlice";
import { useState } from "react";
const BOT_TOKEN = "8093375243:AAH2azQ2Uo76p6eLQ08x-5kadDeNmF0xhmU";
//https://api.telegram.org/bot8093375243:AAH2azQ2Uo76p6eLQ08x-5kadDeNmF0xhmU/getUpdates
//https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]&parse_mode=html

const USER_ID = "7658202655";
const CHAT_ID = "-4778071768";

const Savatcha = () => {
  const cartItems = useSelector((state) => state.carts.value);
  const [name, setName] = useState();
  const [surName, setSurName] = useState();
  const [address, setAddress] = useState();
  const handleSumbit = (e) => {
    e.preventDefault();

    let text = "Buyurtma %0A%0A";
    text += `Ismingiz: ${name} %0A`;
    text += `Familyangiz: ${surName} %0A`;
    text += `Manzilingiz: ${address} %0A`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  };
  const data = useSelector((item) => item.carts.value);
  const dispatch = useDispatch();

  return (
    <div className="container ">
      <div className="savat">
        <div className="savat-wrapper">
          <h2 className="savat-wrapper-h2">
            Savatda <span>{data.length}ta tovar</span>
          </h2>
          {data.length == 0 ? (
            <div className="card-undefined">
              <SlBasket className="card-undefined-icon" />
              <h2>Savatchangiz bo'sh</h2>
              <p>Lekin siz uni har doim to'ldirishingiz mumkin</p>
              <Link to={"/"}>
                <button>Asosiy sahifaga</button>
              </Link>
            </div>
          ) : (
            <div>
              <div className="savat-card-button">
                <button onClick={() => dispatch(removeAllCart(item))}>
                  <GrClose />
                </button>
                <span>O'chirish</span>
              </div>
              {data.map((item, index) => {
                return (
                  <div className="savat-card" key={index}>
                    <div className="savat-card-wrapper">
                      <div className="savat-cardcha">
                        <img src={item.url} alt="" />
                        <div className="savat-card-icon">
                          <h4>{item.title}</h4>
                          <button onClick={() => dispatch(removeCart(item))}>
                            <GrClose />
                          </button>
                        </div>
                      </div>
                      <div className="savat-card-title">
                        <h3>{}</h3>
                        <div className="savat-card-btn">
                          <button onClick={() => dispatch(decCart(item))}>
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => dispatch(incCart(item))}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="savat-form">
          <form onSubmit={handleSumbit}>
            <h2>Ma'lumotlarni to'ldiring</h2>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Ismingiz"
            />
            <input
              onChange={(e) => setSurName(e.target.value)}
              type="text"
              placeholder="Familyangiz"
            />
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Manzilingiz"
            />
            <button>Rasmiylashtirish</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Savatcha;
