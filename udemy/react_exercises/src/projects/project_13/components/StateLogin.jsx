import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValue.email) &&
    !isNotEmpty(enteredValue.email);
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValue.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValue);

    if (!didEdit.email) {
      setDidEdit((prevEdit) => ({
        ...prevEdit,
        email: true,
      }));
    }

    const emailIsInvalidNow = !enteredValue.email.includes("@");

    if (emailIsInvalidNow) {
      return;
    }

    setEnteredValue({
      email: "",
      password: "",
    });

    setDidEdit({
      email: false,
      password: false,
    });

    console.log("http sending request ..");
  }

  function handleValues(identifiers, values) {
    setEnteredValue((prevValues) => ({
      ...prevValues,
      [identifiers]: values,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifiers]: false,
    }));
  }

  function handleInputBlur(identifiers) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifiers]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => handleValues("email", e.target.value)}
          value={enteredValue.email}
          error={emailIsInvalid && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(e) => handleValues("password", e.target.value)}
          value={enteredValue.password}
          error={passwordIsInvalid && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
