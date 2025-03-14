import "./Navbar.css";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavbarBottom = () => {
  const cartItems = useSelector((state) => state.carts.value);
  const sevimli = useSelector((state) => state.likes.value);
  return (
    <div className="container">
      <div className="navbarBottom-wrapper">
        <div className="navbarBottom-wrapper-text">
          <MdOutlineLocalPhone className="navbarBottom-wrapper-text-icon" />
          <Link to={"/"}>
            <h1 className="navbarBottom-wrapper-text">olcha</h1>
          </Link>
          <select name="" id="">
            <option value="">Eng</option>
            <option value="">Uzb</option>
            <option value="">Rus</option>
          </select>
        </div>
        <div className="navbarBottom">
          <Link to={"/"}>
            <h1 className="navbarBottom-text-h1">olcha</h1>
          </Link>
          <div className="navbarBottom-catalog">
            <IoMdMenu />
            <span>Katalog</span>
          </div>

          <div className="navbarBottom-search">
            <input type="search" placeholder="Katalog bo'yicha qidirish" />
            <button>
              <CiSearch />
            </button>
          </div>

          <ul className="navbarBottom-menu-icons">
            <li className="navbarBottom-icon">
              <Link to={"/taqqoslash"}>
                <FiBarChart2 />
                <h4>Taqqoslash</h4>
              </Link>
            </li>
            <li>
              <Link to={"/sevimlilar"}>
                <div className="savat-iconcha">
                  <FaRegHeart />
                  <sup>{sevimli.length}</sup>
                </div>
                <h4>Sevimlilar</h4>
              </Link>
            </li>
            <li>
              <Link to={"/savatcha"}>
                <div className="savat-iconcha">
                  <SlBasket />
                  <sup>{cartItems.length}</sup>
                </div>
                <h4>Savatcha</h4>
              </Link>
            </li>
            <li>
              <Link to={"/kirish"}>
                <FaRegUser />
                <h4>Kirish</h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
