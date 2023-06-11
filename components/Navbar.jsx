import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navbar = () => {

  const [mobileMenu, setMobileMenu] = useState("false");

  useEffect(() => {
    console.log("mobileMenu mudou para: ", mobileMenu);
  }, [mobileMenu]);
  




  return (
    <nav className="nav-c">
      <div className="logo-name">
        <div onClick={() => setMobileMenu(!mobileMenu)} className="mobile-menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
       
       <MobileMenu mobileMenu={mobileMenu}/>


        <Image
          src="/images/pokeball-logo.png"
          width={50}
          height={50}
          alt="pokeNext"
          href="/"
        />
        <h1 className="appName">PokeNext</h1>
      </div>

      <ul className="nav-item-links">
        <li>
          <Link legacyBehavior href="/">
            <a> Home </a>
          </Link>
        </li>
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
