import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../images/photo-album.png";

export default function Navbar() {
  return (
    <div className={styles.navbar} onClick={() => window.location.reload(true)}>
      <img src={logo} alt="photo album logo" className={styles.logo} />
      <span>Photofolio</span>
    </div>
  );
}
