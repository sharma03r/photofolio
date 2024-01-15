import albumLogoImg from "../../images/photos.png";
import styles from "./AlbumItem.module.css";
export default function AlbumItem(props) {
  const { album, setOpenAlbum } = props;

  function handleClick() {
    console.log(album.id);
    setOpenAlbum({
      albumId: album.id,
      isOpen: true,
    });
  }
  return (
    <div className={styles.album_item} onClick={handleClick}>
      <img src={albumLogoImg} alt="album-logo" />
      <span>{album.name}</span>
    </div>
  );
}
