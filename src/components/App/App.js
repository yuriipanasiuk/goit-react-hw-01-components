import { Box } from 'components/Box/Box';
import user from '../Profile/user.json';
import data from '../Statistics/data.json';
import friends from '../FriendList/friends.json';
import transitions from '../TransactionHistory/transactions.json';
import Profile from 'components/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FrienList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Box bg="pageBgColor" pl={4} pr={4} pt={5} pb={5}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <FrienList friends={friends} />
      <TransactionHistory items={transitions} />
    </Box>
  );
};
