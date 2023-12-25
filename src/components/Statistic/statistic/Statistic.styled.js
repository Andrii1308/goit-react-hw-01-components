import styled from 'styled-components';

export const StatSection = styled.section`
  margin: 0 auto;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;
export const Title = styled.h2`
  padding: 20px;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: #f7f7f7;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

function getRandomColor() {
  return `hsl(${Math.random() * 256000}, 100%, 50%)`;
}

export const StatItem = styled.li`
  padding: 16px;
  background-color: ${getRandomColor};
  width: 100%;
`;
