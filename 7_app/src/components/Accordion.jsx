import React, {useState} from "react";  // hook that gives access to states in a functional component

const Accordion = ({ arr }) => {



  /*
  *   ARRAY DESTUCTURING
  *   const [firstELement, secondELement] = colors_array;
  * 
  *   in this way the colors_array contains automatically the values
  *     in the right order.
  *              
  *   firstElement = colors_array[0]
  *   secondElement = colors_array[1]
  * 
  * 
  *   colors_array = [red,green]
  * 
  *   firstELement = red
  *   secondELement = green
  * 
  * */

  const[activeIndex, setActiveIndex] = useState(null);  // null -> initial value, number 0, string ''..

  // not-shortened syntax:
  //
  // const things = useState(null);
  // const activeIndex = things[0]
  // const setActiveIndex = things[1]


  const onTitleClick = index =>{
    setActiveIndex(index);
  }

  const renderedItems = arr.map((item, index) => {

    const active = index === activeIndex ? 'active' : '';

      

    return <React.Fragment key={item.titolo}>
      <div className={"title " + active}
      onClick={() => onTitleClick(index)}>  {/* without ()=> the arrow function the code would be execute everytime the page gets rendered, thats y we have to wrap */}
        <i className={"dropdown " + active}>{item.titolo}</i>
      </div>
      <div className={"content " + active}>
        <p>{item.contenuto}</p>
      </div>
    </React.Fragment>;
  });

  return <div className="ui styled fluid accordion">
    {renderedItems}
    {/*<h1>{activeIndex}</h1>*/}
    </div>;
};

export default Accordion;
