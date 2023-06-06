import FriendList from '../friendlist';
import Profile from '../profile';
import Statistics from '../statistics';
import Transactions from '../transactions';

import user from '../profile/user.json';
import data from '../statistics/data.json';
import friends from '../friendlist/friends.json';
import transactions from '../transactions/transactions.json';

import style from './App.module.css';
console.log(style);
const App = () => {
  return (
    <div className={style['app-container']}>
      <Profile {...user} />

      <Statistics stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};

// console.log(App);

export default App;
