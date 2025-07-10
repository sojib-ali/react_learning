import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValue.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValue);

    setEnteredValue({
      email: "",
      password: "",
    });
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            onChange={(e) => handleValues("email", e.target.value)}
            value={enteredValue.email}
          />

          <div className="control-error">
            {emailIsInvalid && <p>Pleaser enter a valide email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleValues("password", e.target.value)}
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
