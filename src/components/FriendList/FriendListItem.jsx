import { Card } from 'components/ui/card';
import styled from 'styled-components';

export const Span = styled.span`
  border: ${props => (props.isOnline ? '#33cc33' : '#ff0000')} 5px solid;
  border-radius: 50%;
  width: 20%;
  height: 20%;
  bottom: 3px;
`;

export const FriendListItem = ({ friend }) => {
  const { name, isOnline, avatar, id } = friend;

  return (
    <>
      <Card>
        <li className="item" key={id}>
          <Span className="status" isOnline={isOnline}></Span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
        </li>
        <p>{name}</p>
      </Card>
    </>
  );
};
