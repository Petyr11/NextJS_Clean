import React from "react";
import Image from "next/image";
import Link from "next/link";

const navbar = () => {
  return (
    <nav className="nav-c">
      <div className="logo-name">     
      <Image
        src="/images/pokeball-logo.png"
        width={50}
        height={50}
        alt="pokeNext"
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
            <a> Reviews </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
