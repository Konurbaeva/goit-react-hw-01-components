import { Card } from 'components/ui/card';
import styled from 'styled-components';

// В зависимости от пропа isOnline, должен меняться цвет фона span.status.

export const ListItem = styled.li`
  color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const FriendListItem = ({ friend }) => {
  const { name, isOnline, avatar, id } = friend;

  return (
    <>
      <Card>
        <ListItem className="item" key={id} isOnline={isOnline}>
          <span className="status"></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
        </ListItem>
        <p>{name}</p>
      </Card>
    </>
  );
};
