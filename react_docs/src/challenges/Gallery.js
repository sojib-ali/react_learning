import { getImageUrl } from "./utils";
import "../styles/Gallery.css";

export default function Scientists() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Gallery
      size={70}
      person=
      {{
        name: "Maria Skłodowska-Curie",
        Image_id: "szV5sdG",
      }}
      />
      <About
        role={{
          Profession: "physicist and chemist",
          Awards: "4",
          Discovered: "polonium",
        }}
      />
    </div>
  );
}

function Gallery({ person, size }) {
  return (
    <div className="wrapper">
      <h1>{person.name}</h1>
      <img
        className="avatar"
        src={getImageUrl("szV5sdG")}
        alt="Maria Skłodowska-Curie"
        width={size}
        height={size}
      />
    </div>
  );
}

function About({ role }) {
    return (
      <div>
        <ul>
          <li>{role.Profession}</li>
          <li>{role.Awards}</li>
          <li>{role.Discovered}</li>
        </ul>
      </div>
    );
  }
