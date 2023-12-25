import { StatItemWrapper, Label, Percentage } from './StatisticItem.styled';
import PropTypes from 'prop-types';

export const StatisticsItem = ({ label, value }) => {
  return (
    <StatItemWrapper>
      <Label>{label}</Label>
      <Percentage>{value}%</Percentage>
    </StatItemWrapper>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
