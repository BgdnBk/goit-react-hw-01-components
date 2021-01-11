import React from 'react';
import Profile from './components/Profile/Profile';
import user from './user.json';
import Statistics from './components/statistic/Statistics';
import statisticalData from './statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friendsDate from './friends.json';
import TransactionHistory from './components/transactionHistory/TransactionHistory';
import TransactionDate from './transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        // views={user.stats.views}
        // likes={user.stats.likes}
      />
      <Statistics title="Upload stats" items={statisticalData} />
      <FriendList friends={friendsDate} />
      <TransactionHistory items={TransactionDate} />
    </div>
  );
}
