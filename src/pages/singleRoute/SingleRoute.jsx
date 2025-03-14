import "./SingleRoute.css";
import { Data } from "../../mock/product";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { ToastContainer } from "react-toastify";
const SingleRoute = () => {
  const { id } = useParams();
  const data = Data.find((item) => item.id === Number(id));

  if (!data) {
    return <h2>Mahsulot haqida qo'shimcha topilmadi</h2>;
  }

  return (
    <div className="container">
      <div className="singleRoute">
        <h2>{data.title}</h2>
        <button>
          <FaRegHeart />
          <span>Saralanganlarga qo'shish</span>
        </button>
        <div className="singleRoute-wrapper">
          <div className="singleRoute-img">
            <img src={data.url} alt="" />
            <div className="imgs">
              <img src={data.url_1} alt="" />
              <img src={data.url_2} alt="" />
              <img src={data.url_3} alt="" />
            </div>
          </div>
          <div className="singleRoute-text">
            <h4>{data.title}</h4>
            <p>Narx: {data.price}</p>
            <mark>{data.payment}</mark>
            <p>{data.tavsif}</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleRoute;
