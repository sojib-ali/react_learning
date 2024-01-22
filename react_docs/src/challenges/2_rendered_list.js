import { people } from "../components/data";
import { getImageUrl } from "./utils";

export default function List_2() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const mathematicians = people.filter(
    (person) => person.profession === "mathematician",
  );

  const listItems = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {` ${person.profession} 
                known for ${person.accomplishment}`}
      </p>
    </li>
  ));
  const listItems_2 = mathematicians.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {` ${person.profession} 
                known for ${person.accomplishment}`}
      </p>
    </li>
  ));
  return (
    <article>
      <ul>
        <h1>Chemists</h1>
        {listItems}
      </ul>
      <ul>
        <h1>Mathematicians</h1>
        {listItems_2}
      </ul>
    </article>
  );
}
