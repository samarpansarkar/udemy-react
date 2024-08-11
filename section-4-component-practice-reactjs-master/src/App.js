import keyConceptsImage from "./assets/images/key-concepts.png";
import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";
import ConceptItem from "./Components/ConceptItem/ConceptItem";
import Header from "./Components/Header/Header";

const concepts = [
  {
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

const App = () => {
  return (
    <>
      <Header  // Here I using props but it can be simplified by importing image in Header.js file and the title and description can be declared in header.js file file then I can easily import Header.js as Header.
        image={keyConceptsImage}
        title={"Key React Concepts"}
        description={"Selected key React concepts you should know about"}
      />
      <div className="app-container">
        <ConceptItem
          title={concepts[0].title}
          image={concepts[0].image}
          description={concepts[0].description}
        />
        <ConceptItem
          title={concepts[1].title}
          image={concepts[1].image}
          description={concepts[1].description}
        />
        <ConceptItem
          title={concepts[2].title}
          image={concepts[2].image}
          description={concepts[2].description}
        />
      </div>
    </>
  );
};

export default App;
