// import { Profile } from './Profile'
// import { Statistics } from './Statistics';
// import { FriendList } from './FriendList';
// import { TransactionHistory } from './TransactionHistory';
// import user from './mock/user.json';
// import data from './mock/data.json';
// import friends from './mock/friends.json';
// import transactions from './mock/transactions.json';

import { Profile } from './components/Profile'
import { Statistics } from './components/Statistics';
import { FriendList } from './components/FriendList';
import { TransactionHistory } from './components/TransactionHistory';
import user from './components/mock/user.json';
import data from './components/mock/data.json';
import friends from './components/mock/friends.json';
import transactions from './components/mock/transactions.json';


export const App = () => {
  return (
    <div>
    <Profile
  user={user}
  stats={user.stats}
/>
<Statistics stats={data} />
<FriendList friends={friends}/>
<TransactionHistory items={transactions}/>
    </div>
  );
};
