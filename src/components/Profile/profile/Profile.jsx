import { Description } from '../description/Description';
import { Wrapper } from './Profile.styled';
import { StatsBlock } from '../stats/Stats';
import PropTypes from 'prop-types';

export const Profile = ({ items }) => {
  return (
    <Wrapper>
      <Description items={items} />
      <StatsBlock stats={items.stats} />
    </Wrapper>
  );
};

Profile.propTypes = {
  items: PropTypes.object,
};
