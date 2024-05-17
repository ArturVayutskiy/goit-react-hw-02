import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardItem}>
        <img className={styles.cardImg} src={image} alt={name} />
        <p className={styles.cardTitleName}>{name}</p>
        <p className={styles.cardCaption}>@{tag}</p>
        <p className={styles.cardCaption}>{location}</p>
      </div>

      <ul className={styles.cardList}>
        <li className={styles.cardListItem}>
          <span>Followers</span>
          <span className={styles.cardListNumber}>{stats.followers}</span>
        </li>
        <li className={styles.cardListItem}>
          <span>Views</span>
          <span className={styles.cardListNumber}>{stats.views}</span>
        </li>
        <li className={styles.cardListItem}>
          <span>Likes</span>
          <span className={styles.cardListNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
