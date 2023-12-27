import { film } from '../data/data.js';
import { useState } from 'react';
/*
The handleClick event handler is updating a local variable, index. But two things prevent that change from being visible:

    Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
    Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.

To update a component with new data, two things need to happen:

    Retain the data between renders.
    Trigger React to render the component with new data (re-rendering).

The useState Hook provides those two things:

    A state variable to retain the data between renders.
    A state setter function to update the variable and trigger React to render the component again.

*/
/*
In React, useState, as well as any other function starting with ”use”, is called a Hook.

Hooks are special functions that are only available while React is rendering (which we’ll get into in more detail on the next page). They let you “hook into” different React features.

State is just one of those features, but you will meet the other Hooks later.
The only argument to useState is the initial value of your state variable. In this example, the index’s initial value is set to 0 with useState(0).
*/
export default function Home() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if(index===film.length-1)
        setIndex(0);
    else
        setIndex(index + 1);
    
  }

  let i = film[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{i.title} </i> 
        by {i.director}
      </h2>
      <h3>  
        ({index + 1} of {film.length})
      </h3>
      <h3>
        {i.release_date}
      </h3>
      <p>
        {i.opening_crawl}
      </p>
    </>
  );
}