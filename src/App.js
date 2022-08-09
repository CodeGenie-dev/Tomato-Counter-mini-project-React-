import ButtonContainer from "./ButtonContainer";
import TomatoBox from "./TomatoBox";
import "./styles.css";
import React from "react";

// 1 -> display the counter number w/ state
// 2 -> render the actual tomatoes 🍅
// 3 -> refactor to create a TomatoBox component
export default function App() {
  const [tomatoes, setTomatoes] = React.useState("");
  // using a for loop
  /* 
  const [tomatoes, setTomatoes] = React.useState(0);
  
  const tomatoImages = [];

  for (let i = 0; i < tomatoes; i++) {
    tomatoImages.push("🍅");
  }

  const tomatoString = tomatoImages.join("");
  */

  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        <TomatoBox tomatoes={tomatoes} />
        <ButtonContainer tomatoes={tomatoes} setTomatoes={setTomatoes} />
      </div>

      {
        // using a for loop
        /* <div
            onClick={() => setTomatoes(tomatoes - 1)}
            className="button"
            disabled={tomatoes === 0 ? true : false}
          > */
      }
    </div>
  );
}
