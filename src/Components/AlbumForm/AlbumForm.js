import { useRef, useState } from "react";
import styles from "./AlbumForm.module.css";
import { db } from "../../firebaseInit";
import { addDoc, collection } from "firebase/firestore";

export default function AlbumForm() {
  const [formData, setFormData] = useState({ name: "" });
  function handleClear() {
    setFormData({
      name: "",
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Hello");
    const docRef = await addDoc(collection(db, "albums"), {
      name: formData.name,
      imageList: [],
    });
    console.log("Album added with doc id" + docRef.id);
    console.log(formData.name);
    setFormData({ name: "" });
  }
  return (
    <div className={styles.album_form}>
      <span>Create an album</span>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Album Name"
          value={formData.name}
          onChange={(e) => {
            setFormData({
              name: e.target.value,
            });
          }}
          required
        />
        <button type="button" onClick={handleClear}>
          Clear
        </button>
        <button>Create</button>
      </form>
    </div>
  );
}
