import "./Navbar.css";
const NavbarTopImg =
  "https://olcha.uz/uploads/advertising/images/top/7xlobVcBgEnWvETyrySM2DwRBppXsL9iqn0ps8Bc.jpg";
const NavbarTop = () => {
  return (
    <div className="container">
      <div className="navbarTop">
        <img src={NavbarTopImg} alt="" />
      </div>
    </div>
  );
};

export default NavbarTop;
