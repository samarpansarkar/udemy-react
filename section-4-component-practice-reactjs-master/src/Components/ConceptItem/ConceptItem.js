import React from "react";
import './ConceptItem.css'

const ConceptItem = (props) => {
  return (
    <div>
      <li className="concept">
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </li>
    </div>
  );
};

export default ConceptItem;
