import "./UsersData.css";
export default function UsersData({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr data-testid="users" key={user.userName}>
              <td>{user.userName}</td>
              <td>{user.userMail}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
