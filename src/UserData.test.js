import { screen, render, within, getByRole } from "@testing-library/react";
import UsersData from "./UsersData";
test("testing whether the component is rendered with 2 rows", () => {
  const userss = [
    { userName: "jane", userMail: "jane@jane.com" },
    { userName: "Lily", userMail: "lily@gmail.com" },
  ];
  render(<UsersData users={userss} />);
  const rowss = screen.getAllByTestId("users");
  expect(rowss).toHaveLength(2);
});
test("testing whether table cell has user name and user mail", () => {
  const userss = [
    { userName: "jane", userMail: "jane@jane.com" },
    { userName: "Lily", userMail: "lily@gmail.com" },
  ];
  render(<UsersData users={userss} />);
  for (let user in userss) {
    const person = screen.getAllByRole("cell", { name: user.userName });
    expect(person[0]).toBeInTheDocument();
    console.log(person[1]);
    expect(person[1]).toBeInTheDocument();
  }
});
