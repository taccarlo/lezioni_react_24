import './App.css';
import removeArrayDuplicates from remove-array-duplicates;
function App() {
  // Removes Duplicate Array Entries.
  // Sample Usage:
  
  const removeArrayDuplicates = require('rem-arr-dups')
  let myNums = [1,2,3,1,4,1,2,5,3,4]
  let uniqueNums = removeArrayDuplicates(myNums)
  console.log(uniqueNums) // [1,2,3,4,5]

  return (
    <div>
      
    </div>
  );
}

export default App;

// npm install remove-array-duplicates