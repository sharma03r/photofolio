import { useState } from "react";
import styles from "./ImageForm.module.css";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebaseInit";

export default function ImageForm(props) {
  const { openAlbum } = props;
  const [formData, setFormData] = useState({ title: "", url: "" });
  function handleClear() {
    setFormData({
      title: "",
      url: "",
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newImage = { title: formData.title, url: formData.url };
    console.log(formData.title, " ", formData.url);
    const docRef = doc(db, "albums", openAlbum.albumId);
    updateDoc(docRef, {
      imageList: arrayUnion(newImage),
    })
      .then(() => {
        setFormData({
          title: "",
          url: "",
        });
      })
      .catch((e) => {
        console.log("Error encountered =>", e);
      });
  }
  return (
    <div className={styles.image_form}>
      <span>Add an image to the album</span>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image Title"
          value={formData.title}
          name="title"
          onChange={(e) => {
            setFormData({
              title: e.target.value,
              url: formData.url,
            });
          }}
          required
        />
        <input
          type="url"
          placeholder="Image URL"
          value={formData.url}
          name="URL"
          onChange={(e) => {
            setFormData({
              url: e.target.value,
              title: formData.title,
            });
          }}
          required
        />
        <button type="button" onClick={handleClear}>
          Clear
        </button>
        <button>Add</button>
      </form>
    </div>
  );
}
