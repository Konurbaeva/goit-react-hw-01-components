import { Card } from 'components/ui/card';
import styled from 'styled-components';

export const Span = styled.span`
  /* border: ${props => (props.isOnline ? '#35bb23' : '#ff0000')} 10px solid; */
  border: ${props => (props.isOnline ? '#35bb23' : '#ff0000')} 5px solid;
  margin-right: 10px;
  width: 10%;
  height: 10%;
  border-radius: 50%;
  color: pink;
`;

export const ListItem = styled.li`
  height: 60px;
  margin-top: 15px;
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
