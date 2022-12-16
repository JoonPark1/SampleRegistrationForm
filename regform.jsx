import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

function TextInput(){
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  
  
  function handleChange(e){
    switch(e.target.name){
      case 'first_name':
        setFirstName(e.target.value);
        break;
      case 'last_name':
        setLastName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
    }
  }
  
  function handleClickButton(e){
    const first = firstName ? firstName : "Provide_first_name_here";
    const last = lastName ? lastName : "Provide_last_name_here";
    const em = email ? email: "Please_provide_email";
    console.log(first);
    console.log(last);
    console.log(em);
    alert(`Hello ${first} ${last} with email ${em}.`);
    //don't go to a new browser and stay on page!
    e.preventDefault();
  }
  
  
  
  //empty tag stands for React.Fragment: h1 and div with class = "form" are considered
  //children!
  return (
    <>
      <h1>Sample Registration Form</h1>
      <div class = "form">
        <div class = "field">
          <label for = "first_name">First Name:</label>
          <input value = {firstName} onChange = {handleChange} type = "text" name = "first_name"></input>
          <br></br>
       </div>
        <div class = "field">
          <label for = "last_name">Last Name:</label>
          <input value = {lastName} onChange = {handleChange} type = "text" name = "last_name"></input>
          <br></br>
        </div>
        <div id = "last">
          <label for = "email">Email:</label>
          <input value = {email} onChange = {handleChange} type = "text" name = "email"></input>
        </div>
      </div>
      <button type = "button" onClick = {handleClickButton}>Submit</button>
    </>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<TextInput />, root);
