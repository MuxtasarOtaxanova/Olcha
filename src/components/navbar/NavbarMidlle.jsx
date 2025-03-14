import "./Navbar.css";

const NavbarMidlle = () => {
  return (
    <div className="container">
      <div className="navbarMidlle">
        <div className="navbarMidlle-btn">
          <button className="btn-card">0% Muddatli to'lov</button>
          <button className="card-btn">Chegirmalar</button>
          <button className="btn-card">Yutuqli o'yinlar</button>
          <button className="card-btn">Sayt xaritasi</button>
        </div>
        <div className="navbarMidlle-number">
          <h3>+998 (71) 202 2021</h3>
          <button>Olchada soting</button>
          <div className="select">
            <h3>Eng</h3>
            <h3>Uzb</h3>
            <h3>Rus</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMidlle;
