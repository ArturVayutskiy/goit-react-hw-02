import clsx from "clsx";
import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendCard}>
      <img className={styles.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={styles.friendName}>{name}</p>
      <p
        className={clsx(
          styles.caption,
          isOnline ? styles.online : styles.offline
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
export default FriendListItem;
