import { film } from '../data/data.js';

export default function Home() {
  let index = 0;

  function handleClick() {
    index = index + 1;
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