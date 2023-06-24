import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsSun,BsFillMoonFill} from "react-icons/bs";


const navbar = () => {
  // const [icon, setIcon] = useState("sun");
  // const [elementIcon, setElementIcon] = useState(
  //   <BsSun onClick={() => toggleIcon()} className="icon-sun"></BsSun>
  // );

  // function toggleIcon() {
  //   console.log("Clickou função toggleIcon");

  //   if (icon === "sun") {
  //     setIcon("moon");
  //     setElementIcon(
  //       <BsFillMoonFill
  //         onClick={() => toggleIcon()}
  //         className="icon-moon"
  //       ></BsFillMoonFill>
  //     );
  //     console.log("Changed icon to moon");
  //     return;
  //   }

  //   if (icon === "moon") {
  //     setIcon("sun");
  //     setElementIcon(
  //       <BsSun onClick={() => toggleIcon()} className="icon-sun"></BsSun>
  //     );
  //     console.log("Changed icon to sun");
  //   }
  // }

  // const [icon, setIcon] = useState("sun");
  

  // function toggleIcon() {
  //   console.log("clicou")

  //   if (icon === "sun") {
  //     setIcon("moon");
  //   }

  //   setIcon("sun");
  // }


  // var elementIcon = <BsSun onClick={toggleIcon} className="icon-sun" />;
  
  // if (icon === "moon") {
  //   elementIcon = <BsFillMoonFill onClick={toggleIcon} className="icon-moon" />;
  // }

  // if (icon === "sun") {
  //   elementIcon = <BsSun onClick={toggleIcon} className="icon-sun" />;
  // }


 
  const [icon, setIcon] = useState("sun");

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
