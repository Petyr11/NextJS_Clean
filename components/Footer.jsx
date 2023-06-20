import React from "react";
import Link from "next/link";

const footer = () => {
  return (
    <footer>
      <div className="footer-c">
        <ul className="footer-c-links">
          <li>
            <Link legacyBehavior href="/">
              <a> Home | </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/about">
              <a> About | </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/contacts">
              <a> Contacts | </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/reviews">
              <a> Reviews </a>
            </Link>
          </li>
        </ul>
        <h4 className="date"> 19/06/2023 </h4>
      </div>
    </footer>
  );
};

export default footer;
