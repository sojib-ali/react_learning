import logoImg from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={logoImg} alt="logo image" />
      <h1>The react Quiz</h1>
    </header>
  );
};

export default Header;
