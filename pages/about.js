import Image from "next/image";
import styles from "../styles/About.module.css";
import charizard from "../public/images/charizard.png";
import React from "react";

const about = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Texto</p>
      <Image src={charizard} alt="chari" />
    </div>
  );
};

export default about;
