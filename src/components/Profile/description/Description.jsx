import {
  Avatar,
  UserName,
  UserTag,
  UserLocation,
  WrapperDescription,
} from './Description.styled';
import PropTypes from 'prop-types';

export const Description = ({ items: { username, tag, location, avatar } }) => {
  return (
    <WrapperDescription>
      <Avatar src={avatar} alt="User avatar" />
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </WrapperDescription>
  );
};

Description.propTypes = {
  items: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
