import { Card } from 'components/ui/card';
import styled from 'styled-components';

export const Span = styled.span`
  background-color: ${props => (props.isOnline ? '#35bb23' : '#ff0000')};
  position: relative;
  top: -10px;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const ListItem = styled.li`
  height: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 8px;
  margin-right: 10px;
  vertical-align: center;
`;

export const FriendListItem = ({ friend }) => {
  const { name, isOnline, avatar, id } = friend;

  return (
    <>
      <Card>
        <ListItem className="item" key={id}>
          <Span className="status" isOnline={isOnline}></Span>
          <img
            className="avatar"
            src={avatar}
            alt="User avatar"
            width="48"
          />{' '}
          {name}
        </ListItem>
      </Card>
    </>
  );
};
