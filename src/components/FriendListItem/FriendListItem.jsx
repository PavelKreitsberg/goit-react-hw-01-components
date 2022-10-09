import css from '../FriendListItem/FriendListItem.module.css';

export const FriendListItem = friend => {
  return (
    <li className={css.item} key={friend.id}>
      <span className={friend.isOnline ? css.isOnline : css.status}></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};
