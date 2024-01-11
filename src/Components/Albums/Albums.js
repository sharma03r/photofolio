import React, { useState } from "react";
import styles from "./Albums.module.css";
import AlbumForm from "../AlbumForm/AlbumForm";
import { db } from "../../firebaseInit";

export default function Albums() {
  const [isformVisible, setFormVisible] = useState(false);
  return (
    <div className={styles.album_container}>
      {isformVisible && <AlbumForm />}
      <div className={styles.album_heading_container}>
        <h3 className={styles.album_heading}>Your Albums</h3>
        <button
          className={
            isformVisible ? styles.cancel_form_button : styles.add_album_button
          }
          onClick={() => setFormVisible(!isformVisible)}
        >
          {isformVisible ? "Cancel" : "Add Album"}
        </button>
      </div>
    </div>
  );
}
