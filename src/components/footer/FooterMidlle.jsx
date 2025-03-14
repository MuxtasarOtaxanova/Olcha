import "./Footer.css";
const FooterMiddle = () => {
  return (
    <div className="container">
      <div className="footer-middle">
        <div className="content">
          <h2>
            Bizning mobil ilovamiz AppGallery, App Store va Google Play-da
          </h2>
          <div className="store-buttons">
            <a href="#" className="store-btn">
              <img
                src={"https://olcha.uz/_nuxt/appstore.BZyLL41o.svg"}
                alt="App Store"
              />
            </a>
            <a href="#" className="store-btn">
              <img src={"https://olcha.uz/_nuxt/googleplay.CcPmyygm.svg"} />
            </a>
            <a href="#" className="store-btn">
              <img
                src={"https://olcha.uz/_nuxt/app-gallery.5qhZx5qb.svg"}
                alt="AppGallery"
              />
            </a>
          </div>
        </div>
        <div className="mobile-preview">
          <img
            src={"https://olcha.uz/_nuxt/footer-img.CkueetuY.webp"}
            alt="Mobile Preview"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
