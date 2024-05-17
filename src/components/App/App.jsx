import "./App.css";
import Profile from "../Profile/Profile";
import userData from "../../userDate.json";
import FriendList from "../Friends/FriendList";
import friends from "../../friends.json";
import transactions from "../../transactions.json";
import TransactionHistory from "../Transaction/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
