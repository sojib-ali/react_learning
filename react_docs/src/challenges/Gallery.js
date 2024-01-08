import { getImageUrl } from "./utils";
import "../styles/Gallery.css";

export default function Gallerys() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Scientists
        size={70}
        person={{
          name: "Maria Skłodowska-Curie",
          Image_id: "szV5sdG",
        }}
      >
        <About
          role={{
            Profession: "physicist and chemist",
            Discovered: "polonium",
            awards: [
              "Nobel Prize in Physics",
              "Nobel Prize in Chemistry",
              "Davy Medal",
              "Matteucci Medal",
            ],
          }}
        />
      </Scientists>
    </div>
  );
}

function Scientists({ children, person, size }) {
  return (
    <div className="gallery-wrapper">
      <h1>{person.name}</h1>
      <img
        className="avatar"
        src={getImageUrl("szV5sdG")}
        alt="Maria Skłodowska-Curie"
        width={size}
        height={size}
      />
      {children}
    </div>
  );
}

function About({ role }) {
  return (
    <div>
      <ul>
        <li>
          <b>{role.Profession}</b>
        </li>
        <li>
          <b>role.awards:{role.awards.length}</b>
          {/* ({role.awards.join(', ')}) */}(
          {role.awards.map((award, index) => (
            <span key={index}>
              {index > 0 ? ", " : ""}
              {award}
            </span>
          ))}
          )
        </li>
        <li>
          <b>{role.Discovered}</b>
        </li>
      </ul>
    </div>
  );
}
