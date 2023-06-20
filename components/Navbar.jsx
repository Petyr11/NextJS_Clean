import React from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navbar = () => {




  return (
    <nav className="nav-c">
      <div className="logo-name">
        <div className="nav-space"></div>
        <MobileMenu />

        <Link href="/">
          <Image
            src="/images/pokeball-logo.png"
            width={50}
            height={50}
            alt="pokeNext"
          />
        </Link>

        <h1 className="appName">NomeGenérico</h1>
      </div>

      <div>
        <input className="nav-search" type="text" placeholder="Search" />
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

        {/* menu dropdown aqui ---------------*/}

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
    </nav>
  );
};

export default navbar;
