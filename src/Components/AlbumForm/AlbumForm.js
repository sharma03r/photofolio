import { useRef, useState } from "react";
import styles from "./AlbumForm.module.css";

export default function AlbumForm() {
  const [formData, setFormData] = useState({ name: "" });
  function handleClear() {
    setFormData({
      name: "",
    });
  }
  return (
    <div className={styles.album_form}>
      <span>Create an album</span>
      <form>
        <input
          type="text"
          placeholder="Album Name"
          value={formData.name}
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
