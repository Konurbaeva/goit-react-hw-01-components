import styled from 'styled-components'

const ListItem = styled.li(({ isOnline }) => ({
  color: isOnline ? 'green' : 'red',
  width:'30px',
}));

export const FriendListItem = ({ friend }) => {
  const { name, isOnline, avatar, id } = friend;
  
  return (
      <>
 <ListItem className="item" key={id} isOnline={isOnline}>
<img className="avatar" src={avatar} alt="User avatar" width="48" />
<span>
{name}
</span>
</ListItem>
</>
)
}