import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsSun,BsFillMoonFill,BsSearch} from "react-icons/bs";


const navbar = () => {
  const [icon, setIcon] = useState("sun");



  useEffect(() => {
    toggleDarkMode();
  }, [icon]);



  function toggleDarkMode() {
    console.log("clicou toggleDarkMode");

    const body = document.body;
    body.classList.toggle("dark-mode");

    const root = document.documentElement;
    root.classList.toggle("dark-mode");
  }


  function toggleIcon() {
    console.log("clicou");

    if (icon === "sun") {
      setIcon("moon");
    } else {
      setIcon("sun");
    }
  }


  let elementIcon = <BsSun onClick={toggleIcon} className="icon-sun" />;

  if (icon === "moon") {
    elementIcon = <BsFillMoonFill onClick={toggleIcon} className="icon-moon" />;
  }


  return (
    <>
      <nav className="nav-c">
        <div className="logo-name">
          <div className="nav-space"></div>

          <Link href="/">
            <Image
            className="logoImg"
              src="/images/pokeball-logo.png"
              width={50}
              height={50}
              alt="pokeNext"
            />
          </Link>

          <h1 className="appName">NomeGenérico</h1>
        </div>

        <div className="nav-search-c">
          <input className="nav-search-input" type="text" placeholder="Search" />
          <BsSearch className="nav-search-icon"></BsSearch>


        </div>

        <ul className="nav-item-links">
          <li>
            <Link legacyBehavior href="/">
              <a> Home </a>
            </Link>
          </li>

          {/* menu dropdown aqui ---------------*/}

          <li className="dropdown">
            <a>Categorias</a>

            <div className="dropdown-content">
              <ul>
                <li className="dropdown-content-link">
                  <Link legacyBehavior href="/">
                    <a className="dropdown-content-link"> Home </a>
                  </Link>
                </li>
                <li className="dropdown-content-link">
                  <Link legacyBehavior href="/about">
                    <a className="dropdown-content-link"> About </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/contacts">
                    <a className="dropdown-content-link"> Contacts </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/reviews">
                    <a className="dropdown-content-link"> Reviews</a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* menu dropdown aqui FIM ---------------*/}

          <li>
            <Link legacyBehavior href="/about">
              <a> About </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/contacts">
              <a> Contacts </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/reviews">
              <a> Reviews</a>
            </Link>
          </li>
        </ul>
        {/* ícone Sun/Moon Aqui */}

        {elementIcon}

        {/* ícone Sun/Moon Aqui FIM */}
      </nav>
    </>
  );
};

export default navbar;
