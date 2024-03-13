import { IoIosSend } from "react-icons/io";
import "../assets/css/footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-backdrop">
        <div className="footer-first">
          <div className="d-flex align-items-center">
            <img src="/img/logo.png" alt="logo" srcSet="/img/logo.png" />
            <p>Ceramic & Tiles</p>
          </div>

          <div className="footer-email">
            <input type="text" placeholder="Your Email Address" />
            <IoIosSend size={25} />
          </div>
        </div>
        <div className="footer-second">
          <div className="footer-aboutus">
            <h3>About US</h3>
            <p>
              There are many variations of passages of Lorem the majority suffer
            </p>
            <p>+1800-001-658</p>
          </div>
          <div className="footer-ournavigation">
            <h3>Our Navigation</h3>
            <p>Marble</p>
            <p>Marble</p>
            <p>Marble</p>
          </div>
          <div className="footer-ourproduct">
            <h3>Our Product</h3>
            <p>marcelwhite</p>
            <p>marcelwhite</p>
            <p>marcelwhite</p>
          </div>
          <div className="footer-ourshowroom">
            <h3>Our Showroom</h3>
            <p>Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA</p>
            <p>+1800-001-658</p>
            <p>Info@Peacefulthemes.Com</p>
          </div>
        </div>
        <div className="footer-third">
          <hr className="footer-hr" />
          Copyright 2023 Ceramic tiles All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
