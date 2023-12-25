import { StatItem, StatList, StatSection, Title } from './Statistic.styled';
import { StatisticsItem } from '../statisticItem/StatisticItem';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(items => {
          return (
            <StatItem key={items.id}>
              <StatisticsItem label={items.label} value={items.percentage} />
            </StatItem>
          );
        })}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
