import FriendListItem from '../friends-list-item';
import css from './FriendList.module.css';

const FriendList = props => {
  return (
    <ul className={css['friend-list']}>
      {props.friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

export default FriendList;
