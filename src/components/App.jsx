import { Profile } from "./Profile/profile";
import { Statistics } from "./Statistics/Statistics";
import { RenderFriends } from "./FriendList/FriendList";
import { RenderTransacHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
 return (
  <div>
<Profile />,
<Statistics />,
<RenderFriends />,
<RenderTransacHistory />
  </div>
 )
};
