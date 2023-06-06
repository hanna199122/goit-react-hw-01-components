import PropTypes from 'prop-types';
import css from '../friendlist/FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  console.log(isOnline);

  return (
    <li className={css['friend-list__item']}>
      <span
        className={`{css.status} ${isOnline === true ? css.green : css.red}`}
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css['friend-name']}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
