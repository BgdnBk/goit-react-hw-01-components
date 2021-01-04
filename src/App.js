import React from 'react';
import Painting from './components/profile-social/profile';
import user from './user.json';
import StatisticsList from './components/statistic/statisticsList';
import statisticalData from './statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friendsDate from './friends.json';
import TransactionList from './components/transactionHistory/TransactionList';
import TransactionDate from './transactions.json';

export default function App() {
  return (
    <div>
      <Painting
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticsList items={statisticalData} />
      <FriendList friends={friendsDate} />
      <TransactionList items={TransactionDate} />
    </div>
  );
}
