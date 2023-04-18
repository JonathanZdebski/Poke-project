import React from "react";
import Link from "next/link";
import pokeball from "../public/images/pokeball.png";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <Image src={pokeball} alt="pokeball" />
        <h1 className={styles.logo}>PokeNext</h1>
        <ul className={styles.link_items}>
          <li className={styles.linkh}>
            <Link legacyBehavior href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/about">
              <a>Sobre</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
