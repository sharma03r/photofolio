import React, { useEffect, useState } from "react";
import styles from "./Albums.module.css";
import AlbumForm from "../AlbumForm/AlbumForm";
import { db } from "../../firebaseInit";
import { collection, onSnapshot } from "firebase/firestore";
import AlbumItem from "../AlbumItem/AlbumItem";
import Images from "../Images/Images";

export default function Albums() {
  const [isformVisible, setFormVisible] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [openAlbum, setOpenAlbum] = useState({ albumId: "", isOpen: false });
  useEffect(() => {
    const onSub = onSnapshot(collection(db, "albums"), (snapshot) => {
      const albums = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setAlbums(albums);
      console.log(albums);
    });
  }, []);
  return (
    <>
      {!openAlbum.isOpen ? (
        <div className={styles.album_container}>
          {isformVisible && <AlbumForm />}
          <div className={styles.album_heading_container}>
            <h3 className={styles.album_heading}>Your Albums</h3>
            <button
              className={
                isformVisible
                  ? styles.cancel_form_button
                  : styles.add_album_button
              }
              onClick={() => setFormVisible(!isformVisible)}
            >
              {isformVisible ? "Cancel" : "Add Album"}
            </button>
          </div>
          <div className={styles.albums_list}>
            {albums.map((album, index) => (
              <AlbumItem
                album={album}
                setOpenAlbum={setOpenAlbum}
                key={album.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <Images openAlbum={openAlbum} setOpenAlbum={setOpenAlbum} />
      )}
    </>
  );
}
