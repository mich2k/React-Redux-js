// import react and react DOM

import React from "react";
import ReactDOM from "react-dom";

// Create react component

const App = function () {
  // const App = () =>
  return (
    // the return statement must be on the same line or using ()
    <div>
      <header>
        <p>
          <h1>My first react application!</h1>
          Even if i tought i had to stick doing C cmd exes my whole life.
        </p>
      </header>

      <div className="color-picker">
        {/*

            Difference between HTML and JSX (examples) STYLES:

                    HTML: <div style="background-color: red;"> <div/>

                    first bracket: JS variable
                    second bracket: JS object
                    then there is property and value

                    JSX: <div style={{backgroundColor: 'red'}} <div/>



        */}

        {/*

            for strings:
                "" for JSX objs
                '' for not JSX objs ( where you need the {{  }} )

        */}

        {/*

            for classes:
                "" for JSX objs
                '' for not JSX objs ( where you need the {{  }} )
        */}
        <label className="prettyLabel" htmlFor="nice_color">
          Choose a random color:{" "}
        </label>
        <input type="color" name="not_yellow_please" id="nice_color" />
      </div>
    </div>
  );
};

// Take react component and show it on the page

ReactDOM.render(<App />, document.querySelector("#root"));
