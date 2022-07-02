import { Card } from 'components/ui/card';
import styled from 'styled-components';

// В зависимости от пропа isOnline, должен меняться цвет фона span.status.

export const ListItem = styled.li`
  color: ${props => (props.isOnline ? 'green' : 'red')};
  .status {
    position: absolute;
    background-color: #ff0000;
    border-radius: 50%;
    width: 1%;
    height: 1%;
    border: #fff 3px solid;
    bottom: 3px;
  }
`;

export const FriendListItem = ({ friend }) => {
  const { name, isOnline, avatar, id } = friend;

  return (
    <>
      <Card>
        <ListItem className="item" key={id}>
          <span className="status" isOnline={isOnline}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
        </ListItem>
        <p>{name}</p>
      </Card>
    </>
  );
};
