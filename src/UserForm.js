import { useState } from "react";
import "./UserForm.css";
export default function UserForm({ usersAdd }) {
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, userMail);
    usersAdd({ userName, userMail });
    setUserMail("");
    setUserName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"> Name</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor="mail">Mail</label>
      <input
        type="mail"
        value={userMail}
        onChange={(e) => setUserMail(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
