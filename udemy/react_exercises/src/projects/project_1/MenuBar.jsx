import "../../styles/menuBar.css";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

const MenuBar = () => {
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <CoreConcepts />
        </section>
        <Examples />
      </main>
    </div>
  );
};

export default MenuBar;
