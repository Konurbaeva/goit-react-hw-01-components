import { Card } from 'components/ui/card';
import styled from 'styled-components';

export const Span = styled.span`
  border: ${props => (props.isOnline ? '#35bb23' : '#ff0000')} 10px solid;
  margin-right: 10px;
  width: 20%;
  height: 20%;
  border-radius: 50%;
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
