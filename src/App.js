import { useState } from "react";
import UserForm from "./UserForm";
import UsersData from "./UsersData";
export default function App() {
  const [users, setUsers] = useState([]);
  const usersAdd = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div>
      <UserForm usersAdd={usersAdd} />
      <UsersData users={users} />
    </div>
  );
}
