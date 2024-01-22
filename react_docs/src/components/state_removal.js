export default function GreetForm() {
  function handleClick() {
    const name = prompt("what is your name?");
    alert(`Hello, ${name}!`);
  }
  return <button onClick={handleClick}> Greet </button>;
}
