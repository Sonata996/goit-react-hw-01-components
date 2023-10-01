import { Profile } from "./Profile/profile";
import user from 'data/user.json'

import { Statistics } from "./Statistics/Statistics";
import data from 'data/data.json'

import { RenderFriends } from "./FriendList/FriendList";
import friends from 'data/friends.json'

import { RenderTransacHistory } from "./TransactionHistory/TransactionHistory";
import transactions from 'data/transactions.json'


export const App = () => {
 return (
  <div>
<Profile prof={user}/>
<Statistics title="Upload stats" stat={data}/>
<RenderFriends friends={friends}/>
<RenderTransacHistory transac={transactions}/>
  </div>
 )
};
