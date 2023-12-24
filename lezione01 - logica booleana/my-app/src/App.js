
import './App.css';

function App() {
  const cases = [
    {a:0,b:0},
    {a:0,b:1},
    {a:1,b:0},
    {a:1,b:1}
  ]
  function AND(a,b){
    return a&b;
  }
  function OR(a,b){
    return a|b;
  }
  function XOR(a,b){
    return a^b;
  }
  const ANDlistItems = cases.map(y =>
    <tr key={y.id}>
      <td>{y.a}</td>
      <td>{y.b}</td>
      <td className="active-row">{AND(y.a,y.b)}</td>
    </tr>
  );
  const ORlistItems = cases.map(y =>
    <tr key={y.id}>
      <td>{y.a}</td>
      <td>{y.b}</td>
      <td className="active-row">{OR(y.a,y.b)}</td>
    </tr>
  );
  const XORlistItems = cases.map(y =>
    <tr key={y.id}>
      <td>{y.a}</td>
      <td>{y.b}</td>
      <td className="active-row">{XOR(y.a,y.b)}</td>
    </tr>
  );
  return (
    <div>
    <table className="styled-table">
       <thead>
           <tr>
               <th>A</th>
               <th>NOT A</th>
           </tr>  
           
       </thead>
       <tbody>
           <tr>
             <td>0</td>
             <td className="active-row">{1}</td>
           </tr>
           <tr>
             <td>1</td>
             <td className="active-row">{0}</td>
           </tr>
       </tbody>
       <tbody>
       </tbody>
   </table>
     <table className="styled-table">
        <thead>
            <tr>
                <th>A</th>
                <th>B</th>
                <th>A AND B</th>
            </tr>
        </thead>
        <tbody>
            {ANDlistItems}
        </tbody>
    </table>
     <table className="styled-table">
        <thead>
            <tr>
                <th>A</th>
                <th>B</th>
                <th>A OR B</th>
            </tr>
        </thead>
        <tbody>
            {ORlistItems}
        </tbody>
    </table>
     <table className="styled-table">
        <thead>
            <tr>
                <th>A</th>
                <th>B</th>
                <th>A XOR B</th>
            </tr>
        </thead>
        <tbody>
            {XORlistItems}
        </tbody>
    </table>

    </div>
  );
}

export default App;
