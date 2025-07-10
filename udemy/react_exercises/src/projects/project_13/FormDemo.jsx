import Header from "./components/Header.jsx";
import Signup from "./components/Signup.jsx";
// import Login from "./components/StateLogin.jsx";
import "./formDemo.css";

const FormDemo = () => {
  return (
    <div>
      <Header />
      <main>
        <Signup />
      </main>
    </div>
  );
};

export default FormDemo;
