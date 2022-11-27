import { useState } from "react";

const Login = () => {
  const [inputForm, setInputForm] = useState({
    username: "",
    password: "",
  });

  return (
    <>
      <form action="action_page.php" method="post">
        <div className="container">
          <label>
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            value={inputForm.username.value}
            required
          ></input>

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            value={inputForm.password.value}
            required
          ></input>

          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

export default Login;
