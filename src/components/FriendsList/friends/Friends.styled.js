import styled from 'styled-components';

export const FriendWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 240px;
  height: 72px;
  gap: 12px;
  padding: 12px;
`;
export const Status = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.color === 'true' ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  border-radius: 5px;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;
export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
