import {
  FriendAvatar,
  FriendName,
  FriendWrapper,
  Status,
} from './Friends.styled';
import PropTypes from 'prop-types';

export function Friend({ avatar, name, isOnline }) {
  return (
    <FriendWrapper>
      <Status color={isOnline ? 'true' : 'false'}></Status>
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendWrapper>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
