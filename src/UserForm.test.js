import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import user from "@testing-library/user-event";

import UserForm from "./UserForm";
import { waitFor } from "@testing-library/react";
test("testing whether form is present", () => {
  render(<UserForm />);
  const textbox = screen.getAllByRole("textbox");
  expect(textbox).toHaveLength(2);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
test("it calls onUserAdd when the form is submitted", async () => {
  const argList = [];

  const callback = (args) => {
    console.log("args", args);
    argList.push(args);
  };

  render(<UserForm usersAdd={callback} />);

  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  // Simulate typing in a name

  await user.click(nameInput);

  await user.keyboard("jane");

  // Simulate typing in an email

  await user.click(emailInput);

  await user.keyboard("jane@jane.com");

  // Find the button

  const button = screen.getByRole("button");

  // Simulate clicking the button

  user.click(button);

  await waitFor(() => {
    assertOnUserAddCallback(argList);
  });

  // Assertion to make sure 'onUserAdd' gets called with email/name

  function assertOnUserAddCallback(argList) {
    expect(argList).toHaveLength(1);
    console.log(argList);
    expect(argList[0]).toEqual({
      userName: "jane",
      userMail: "jane@jane.com",
    });
  }
});
test("it calls onUserAdd when the form is submitted using mock fn", async () => {
  const mock = jest.fn();
  render(<UserForm usersAdd={mock} />);

  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  // Simulate typing in a name

  await user.click(nameInput);

  await user.keyboard("jane");

  // Simulate typing in an email

  await user.click(emailInput);

  await user.keyboard("jane@jane.com");

  // Find the button

  const button = screen.getByRole("button");

  // Simulate clicking the button

  user.click(button);

  await waitFor(() => {
    expect(mock).toHaveBeenCalled();
  });
  await waitFor(() => {
    expect(mock).toHaveBeenCalledWith({
      userName: "jane",
      userMail: "jane@jane.com",
    });
  });
});
test("check whether input field is empty after button is clicked", async () => {
  render(<UserForm usersAdd={() => {}} />);
  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  await user.click(nameInput);
  await user.keyboard("jane");
  await user.click(emailInput);
  const button = screen.getByRole("button");
  button.click(button);

  await waitFor(() => {
    expect(nameInput).toHaveValue("");
  });
  await waitFor(() => {
    expect(emailInput).toHaveValue("");
  });
});
