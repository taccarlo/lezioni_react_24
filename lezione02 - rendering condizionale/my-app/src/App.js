
import './App.css';


const Animals = ["Dog", "Cat", "Frog"];
console.log(Animals[0]);
const Animals2 = [["Dog", "Cat", "Frog"],[]];
console.log(Animals2[0][1]);
const index = Animals.findIndex((item)=>item ==="Frog");
console.log("indice:"+index);
const Animals3 = Animals.map((item)=>item+"!");
console.log(Animals3);
const ages = [32, 33, 16, 40];

let checkAdult2=(a)=>a>=18;
function checkAdult(age) {
  return age >= 18;
}
let result = ages.filter(checkAdult);
console.log(result);
result = ages.filter(checkAdult2);
console.log(result);

function App() {
  return (
    <div>

    </div>
  );
}

export default App;
