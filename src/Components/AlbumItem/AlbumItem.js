import albumLogoImg from "../../images/photos.png";
import styles from "./AlbumItem.module.css";
export default function AlbumItem(props) {
  return (
    <div className={styles.album_item}>
      <img src={albumLogoImg} alt="album-logo" />
      <span>{props.name}</span>
    </div>
  );
}
