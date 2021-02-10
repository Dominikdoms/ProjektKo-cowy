import './sass/main.scss'
import {useEffect, useState} from "react";
import {addNewNote, getAllNotes} from "./services/api-service";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import {Home, Notes, AddNot, Notifications} from './components/Nav'


const App = () => {
  return(
      <HashRouter>
          <ul style={{display: "flex", justifyContent: "space-around"}}>
              <li>
                  <Link to={"/home"}>Strona główna</Link>
              </li>
              <li>
                  <Link to={"/notes"}>Wszystkie notatki</Link>
              </li>
              <li>
                  <Link to={"/addNot"}>Dodaj notatkę</Link>
              </li>
              <li>
                  <Link to={"/notifications"}>Powtórka</Link>
              </li>
          </ul>
          <Switch>
              <Route exact path={"/home"}>
                  <Home tim={"Strona główna"}/>
              </Route>

              <Route exact path={"/notes"}>
                  <Notes tim={"Wszystkie notatki:"}/>
              </Route>

              <Route exact path={"/addNot"}>
                  <AddNot tim={"Dodaj notatkę:"}/>
              </Route>

              <Route exact path={"/notifications"}>
                  <Notifications tim={"Powtórka"}/>
              </Route>
          </Switch>
      </HashRouter>
  )
}

export default App;
//app jest odpalony w pliku index.js
//a w tym pliku muszę z niego skorzystać :)
//dlatego jest importowany






















//DAREK:
// import './sass/main.scss'
// import {useEffect, useState} from "react";
// import {addNewNote, getAllNotes} from "./services/api-service";
//
//
// function App(){
//   const [notes, setNotes] = useState([]);
//   useEffect(  () =>{
//     getAllNotes(data => setNotes(data), err => console.log());
//   },[])
//
//   const handleAddNote = () => {
//     //create noteObje
//     const note = {
//       content: "",
//
//     }
//     addNewNote(note);
//   }
//   return (
//       <div className="App">
//
//       </div>
//   );
// }
