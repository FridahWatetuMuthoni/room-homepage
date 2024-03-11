import "./Navbar.scss";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";
import close from "../../assets/images/icon-close.svg";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
    console.log("clicked");
  };
  console.log(showMenu);
  return (
    <nav className="navigation">
      <section className="logo">
        <img src={logo} alt="logo" />
      </section>
      <>
        <section className="mobile-menu">
          <img
            src={hamburger}
            alt=""
            onClick={toggleMenu}
            className={showMenu ? "hide" : null}
          />
          <ul className={`${showMenu ? "menu-show" : "hide"} mobile-links`}>
            <section>
              <img
                src={close}
                alt="close"
                onClick={toggleMenu}
                className={showMenu ? null : "hide"}
              />
            </section>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </section>

        <ul className="desktop-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </>
    </nav>
  );
}

export default Navbar;
