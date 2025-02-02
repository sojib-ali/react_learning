import { useEffect, useState } from "react";
import reactImg from "/src/assets/react-core-concepts.png";
const reacDescriptions = ["Fundamental", "Crucial", "Core"];
import "./../Header/Header.css";

// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }

export default function Header() {
  const [desc, setDesc] = useState(reacDescriptions[0]);
  useEffect(() => {
    let index = 0;
    const id = setInterval(() => {
      index = (index + 1) % reacDescriptions.length;
      setDesc(reacDescriptions[index]);
    }, 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
