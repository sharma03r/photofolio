import styles from "./ImageItem.module.css";
export default function ImageItem(props) {
  const { title, url } = props;
  console.log("ji");
  return (
    <div className={styles.image_item}>
      <img src={url} alt="image" />
      <span>{title}</span>
    </div>
  );
}
