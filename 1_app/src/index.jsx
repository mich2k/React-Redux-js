// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  // const buttonText = 'Click Me!'
  const textInObject = { text: 'hello im the object content' };
  const labelName = " Enter your name: ";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelName}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {textInObject.text} {// with single curly braces is possible to refer to js-variables 
                          }

      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
