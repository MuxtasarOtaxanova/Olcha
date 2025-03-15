import "./Kirish.css";
import { FaRegUser } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { GoArchive } from "react-icons/go";
import { MdManageSearch } from "react-icons/md";
import { MdRestartAlt } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

const Kirish = () => {
  return (
    <div className="container">
      <div className="kirish">
        <div className="kirish-ul">
          <ul>
            <li>
              <a href="">
                <FaRegUser />
                <span>Shaxsiy ma'lumotlar</span>
              </a>
            </li>
            <li>
              <a href="">
                <CgNotes />
                <span>Muddatli to'lov uchun shaxsiy ma'lumotlar</span>
              </a>
            </li>
            <li>
              <a href="">
                <GoArchive />
                <span>Mening buyurtmalarim</span>
              </a>
            </li>
            <li>
              <a href="">
                <MdManageSearch />
                <span>Buyurtmani kuzatish</span>
              </a>
            </li>
            <li>
              <a href="">
                <MdRestartAlt />
                <span>Tovarlarni qaytarish yoki almashtirish</span>
              </a>
            </li>
            <li>
              <a href="">
                <LuMapPin />
                <span>Manzillar</span>
              </a>
            </li>
            <li>
              <a href="">
                <FaRegHeart />
                <span>Sevimli mahsulotlar</span>
              </a>
            </li>
            <li>
              <a href="">
                <FiBarChart2 />
                <span>Taqqoslash</span>
              </a>
            </li>
            <li>
              <a href="">
                <MdOutlineTextsms />
                <span>Mening sharhlarim</span>
              </a>
            </li>
            <li>
              <a href="">
                <IoMdNotificationsOutline />
                <span>Bildirishnomalar</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="kirish-wrapper">
          <h2>Shaxsiy ma'lumotlar</h2>
          <h4>Foydalanuvchi ID si __________ 323813</h4>
          <h4>Ism va familya _______________ user-323813</h4>
          <h4>Telefon raqam ________________ 998978223324</h4>
          <h4>Tug'ilgan sana _______________ -</h4>
          <h4>Elektron pochta ______________ -</h4>
          <p>O'ZGARTIRISH</p>
          <h3>Parol</h3>
          <h4>Joriy parol ___________________ ********</h4>
          <p>O'ZGARTIRISH</p>
        </div>
        <div className="kirish-cards">
          <div className="kirish-card1">
            ``
            <div className="card-text">
              <h3>Olcha balansi</h3>
              <h3>ID: 820488</h3>
            </div>
            <h2>+ 0 so'm</h2>
          </div>
          <div className="kirish-card2">
            <div className="card-text">
              <h3>Bonuslar</h3>
              <h3></h3>
            </div>
            <h2> 0 so'm</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kirish;
