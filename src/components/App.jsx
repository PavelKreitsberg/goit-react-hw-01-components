import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/Transaction';

import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <div>
      <section id="task1">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>

      <section id="task2">
        <Statistics stats={data} />
      </section>

      <section id="task3">
        <FriendList friends={friends} />
      </section>

      <section id="task4">
        <TransactionHistory items={transactions} />
      </section>
    </div>
  );
};
