import React from "react";
import Link from "next/link";

const MobileMenu = ({ mobileMenu }) => {
  return (


    <div className={ mobileMenu ? "hideDisplay": "" }>

      <ul className="mobileMenu-items">
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
    </div>
  );
};

export default MobileMenu;
