import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';

import user from './mock/user.json';
import data from './mock/data.json';
import friends from './mock/friends.json';
import transactions from './mock/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} stats={user.stats} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
