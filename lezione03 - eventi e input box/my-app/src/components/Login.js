/* notiamo un refresh e aggiunta parametri in aggiunta all'url dopo aver cliccato*/
/* questo è dato dal fatto che viene inviata al server una richiesta http al server locale che gestisce il sito*/
/* con type = button non viene sottomessa al server sul bottone, oppure mettere onSubmit sul form */
//con preventdefault preveniamo il comportamento di default del browser
import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email:'',
    password:''
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted!");
  }

  function handleInputChange(identifier, event){
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]:event.target.value
    }));
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event)=>handleInputChange('email', event)} value={enteredValues.email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event)=>handleInputChange('password', event)} value={enteredValues.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button">Login</button>
      </p>
    </form>
  );
}
