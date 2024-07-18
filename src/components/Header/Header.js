import React, { useState } from "react";
import Logo from "../../image/logo.png";
import "./styleHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "../Header/Menu/navHeader";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 mx-lg-5 px-lg-5">
        <div className="header-items container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a
              className="navbar-brand d-lg-none"
              href="/"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <img src={Logo} alt="Logo" className="logo-img" />
            </a>

            <a
              className="navbar-brand mx-auto d-none py-lg-3 mx-lg-4 d-lg-block"
              href="/"
            >
              <img src={Logo} alt="Logo" className="logo-img" />
            </a>
          </div>
          <div
            className="collapse navbar-collapse order-lg-1"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav menu-list mb-2 mb-lg-0 d-lg-flex flex-lg-row flex-lg-wrap">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="forWomenDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  FOR WOMEN
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="forWomenDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/lynne-de-r" href="#lynne-de-r">
                      LYNNE DE R
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/eau-de-grasse-for-women"
                      href="#eau-de-grasse-w"
                    >
                      EAU DE GRASSE
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/aqua-divina" href="#aqua-divina">
                      AQUA DIVINA
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ete-indien" href="#ete-indien">
                      ETE INDIEN
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/oudissimo" href="#oudissimo">
                      OUDISSIMO
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/datsima" href="#datsima">
                      DATSIMA
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sakura" href="#sakura">
                      SAKURA
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/" href="#white-blue">
                      WHITE BLUE
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/" href="#tendre-delit">
                      TENDRE DELIT
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/" href="#nemesis">
                      NEMESIS
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="forMenDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  FOR MEN
                </a>
                <ul className="dropdown-menu" aria-labelledby="forMenDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/eau-de-grasse-for-men"
                      href="#eau-de-grasse-m"
                    >
                      EAU DE GRASSE
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/rocky-in-the-sky"
                      href="#rocky-in-the-sky"
                    >
                      ROCKY IN THE SKY
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      href="#samourai-in-black"
                    >
                      SAMOURAI IN BLACK
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      href="#violin-spirit"
                    >
                      VIOLIN SPIRIT
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/" href="#daoud">
                      DAOUD
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      href="#dracula-elixir"
                    >
                      DRACULA ELIXIR
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/" href="#parsifal">
                      PARSIFAL
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#la-sierra">
                      LA SIERRA
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#crazy-delit">
                      CRAZY DELIT
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/soliflores">
                  SOLIFLORES / EAU DE PARFUM
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ambience-difuser">
                  AMBIENCE DIFFUSER
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pillow-mist">
                  PILLOW MIST
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ondemand">
                  ON DEMAND
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" href="#contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav d-lg-flex flex-row order-lg-2">
            <button className="btn search-btn" type="submit">
              <FontAwesomeIcon
                style={{
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
                icon={faMagnifyingGlass}
              />
            </button>
            <button className="btn cart-btn">
              <FontAwesomeIcon
                style={{ cursor: "pointer", fontSize: "1rem" }}
                icon={faCartShopping}
              />
            </button>
          </div>
        </div>
      </nav>

      <div className="welcome">
        <text>WELCOME ON OUR SHOP</text>
      </div>
    </>
  );
};

export default Header;
