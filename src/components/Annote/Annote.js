import React from "react";
import "./Annote.css";
import EditablePage from "./editablePage";

const Annote = () => {
  return (
    <div class="bg-image2">
    <div className="home">
      <h1 className="Logo">Annote</h1>
      <p className="Intro">
        Helloo{" "}
        <span role="img" aria-label="greetings" className="Emoji">
          👋
        </span>{" "}
        You can add content below. Type <span className="Code">/</span> to see
        available elements.
      </p>
      <EditablePage />
    </div>
    </div>
  );
};

export default Annote;
