import { useEffect, useState } from "react";
import backImage from "../../images/back.png";
import styles from "./Images.module.css";
import ImageForm from "../ImageForm/ImageForm";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseInit";
import ImageItem from "../ImageItem/ImageItem";

export default function Images(props) {
  const { openAlbum, setOpenAlbum } = props;
  const [isformVisible, setFormVisible] = useState(false);
  const [imageList, setImageList] = useState([]);
  function goBackToHome() {
    window.location.reload(false);
  }
  console.log(openAlbum);
  useEffect(() => {
    const onSub = onSnapshot(collection(db, "albums"), (snapshot) => {
      const albums = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      let albumLook;
      albums.forEach((album) => {
        if (album.id === openAlbum.albumId) {
          albumLook = album;
        }
      });
      console.log("this is", albumLook);
      const imageList = albumLook.imageList;
      console.log(imageList, "image List");
      setImageList(imageList);
    });
  }, []);

  return (
    <div className={styles.imagelist_container}>
      {isformVisible && <ImageForm openAlbum={openAlbum} />}
      <div className={styles.image_heading_container}>
        <span>
          <img src={backImage} onClick={goBackToHome} />
        </span>
        <h3>Images</h3>
        <button
          className={
            isformVisible ? styles.cancel_form_button : styles.add_image_button
          }
          onClick={() => setFormVisible(!isformVisible)}
        >
          {isformVisible ? "Cancel" : "Add image"}
        </button>
      </div>
      <div className={styles.images_list}>
        {imageList.map((image, index) => (
          <ImageItem title={image.title} url={image.url} />
        ))}
      </div>
    </div>
  );
}
