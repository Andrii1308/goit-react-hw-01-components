import { StatsItem, StatsList, Label, Quantity } from './Stats.styled';
import PropTypes from 'prop-types';

export const StatsBlock = ({ stats: { followers, views, likes } }) => {
  return (
    <StatsList>
      <StatsItem>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatsItem>
    </StatsList>
  );
};

StatsBlock.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
