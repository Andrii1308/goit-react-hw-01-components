import styled from 'styled-components';

export const StatsList = styled.ul`
  display: flex;
  gap: 12px;
  justify-content: space-around;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  background-color: #add8e6;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Label = styled.span`
  color: #ffffff;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
