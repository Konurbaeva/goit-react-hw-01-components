import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { Card } from '../ui/card';

export const FriendList = ({friends}) => {
    return (
<>
<ul className="friend-list">
<Card>
    {friends.map((friend) => (
  <FriendListItem  friend={friend} key={friend.id}/>
  ))}
   </Card>
</ul>
</>
)
}

FriendList.propTypes = {
friends: PropTypes.arrayOf( 
    PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string, 
        isOnline: PropTypes.bool
    })
)    
}