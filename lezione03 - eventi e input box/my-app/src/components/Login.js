/* notiamo un refresh e aggiunta parametri in aggiunta all'url dopo aver cliccato*/
/* questo è dato dal fatto che viene inviata al server una richiesta http al server locale che gestisce il sito*/
/* con type = button non viene sottomessa al server sul bottone, oppure mettere onSubmit sul form */
//con preventdefault preveniamo il comportamento di default del browser
import { useState } from "react";

export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPassword, setEnteredPassword] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted!");
    alert("Submitted!");
  }

  function handleEmailChange(event){
    setEnteredEmail(event.target.value);
  }

  function handlePasswordChange(event){
    setEnteredPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={handleEmailChange} value={enteredEmail}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"onChange={handlePasswordChange} value={enteredPassword} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button">Login</button>
      </p>
    </form>
  );
}
