import { Layout } from './Layout';
import { Profile } from './Profile/profile/Profile';
import { Statistics } from './Statistic/statistic/Statistic';
import { FriendList } from './FriendsList/friendsList/FriendsList';
import { TransactionHistory } from './TransactionsHistory/history/TransactionsHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <Layout>
      <Profile items={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Layout>
  );
};
