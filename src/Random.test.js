import { screen, render, waitFor } from "@testing-library/react";
import { User } from "@testing-library/user-event";
import Random from "./Random";
test("find all elements by role", async () => {
  render(<Random />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
  const link = screen.getByRole("link"); //a
  expect(link).toBeInTheDocument();
  const listitem = screen.getAllByRole("listitem"); //li
  expect(listitem[0]).toBeInTheDocument();
  expect(listitem).toHaveLength(2);
  const listgroup = screen.getAllByRole("list"); //ul
  expect(listgroup[0]).toBeInTheDocument();
  const footer = screen.getAllByRole("contentinfo");
  expect(footer[0]).toBeInTheDocument();
  const addButton = screen.getByRole("button", { name: /Add/i });
  expect(addButton).toBeInTheDocument();
  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toBeInTheDocument();
  expect(screen.queryByRole("textbox")).toEqual(null);
  let errorThrown = false;
  try {
    await screen.findByRole("textbox");
  } catch (err) {
    errorThrown = true;
  }
  expect(errorThrown).toEqual(true);
});
