// import { Checkbox, fireEvent } from "./Checkbox"
// import {render} from "@testing-library/react";
// test("Selecting checkbox should change value true",()=>{
//     const {getByLabelText}=render(<Checkbox/>);
//     const checkbox=getByLabelText(/unchecked/i);
//     fireEvent.click(checkbox);
//     expect(checkbox.checked).toEqual(true);
// });


import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./Checkbox";

test("Selecting checkbox should change value to true", async () => {
  render(<Checkbox />);
  const checkbox = screen.getByRole("checkbox", { name: /unchecked/i });

  userEvent.click(checkbox);

  await waitFor(() => {
    expect(checkbox).toBeChecked();
  });
});


