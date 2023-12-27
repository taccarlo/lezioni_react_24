import { useState } from 'react';
import { filmList } from '../data/data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    if(index===filmList.length-1)
        setIndex(0);
    else
        setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let i = filmList[index];
  return (
    <div  style={{margin: "2em"}}>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{i.title} </i> 
        by {i.director}
      </h2>
      <h3>  
        ({index + 1} of {filmList.length})
      </h3>
      <h3>
        {i.release_date}
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} opening crawl
      </button>
      {showMore && <p>
        {i.opening_crawl}</p>}
    </div>
  );
}
