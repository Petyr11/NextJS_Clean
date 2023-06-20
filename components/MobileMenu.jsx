import React, { useEffect, useState } from "react";
import Link from "next/link";




const MobileMenu = () => {


  const [mobileMenu, setMobileMenu] = useState("false");


  useEffect(() => {
    console.log("mobileMenu mudou para: ", mobileMenu);
  }, [mobileMenu]);




  return (
    <>
      <div
        onClick={() => setMobileMenu(!mobileMenu)}
        className="mobile-menu-icon"
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>



      <div
        className={
          mobileMenu ? "mobile-menu-items showMenu" : "mobile-menu-items"
        }
      >

        <ul>
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
          <li>
            <Link legacyBehavior href="/Animes">
              <a> Animes</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/Mangas">
              <a> Mangas</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/Games">
              <a> Games</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/Podcasts">
              <a> Podcasts</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
