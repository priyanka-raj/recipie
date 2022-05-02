import Login from './components/Login';
import Recipes from './components/Recipes';
import Contact from './components/Contact';

import {db} from "./firebase.config"
import {useState, useEffect} from "react"
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc
} from "firebase/firestore"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Nav from './components/Nav';



const Nav1 = () => (
  <div>
    <ul>
      {/* <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li> */}




      <li>
        <Link to="/login1">Loginfff</Link>
      </li>
      <li>
        <Link to="/recipe1">Recipes</Link>
      </li>
      <li>
        <Link to="/contact">ContactUs</Link>
      </li>
    </ul>
  </div>
);

function App() {
  return (
    <div className="App">
      {/* <Recipes />
      <Login/> */}

        {/* <div> */}
          <Nav />
          {/* <Nav1 /> */}
          <Routes>



          <Route path="/login1" element={<Login/>}/>
          <Route path="/recipe1" element={<Recipes/>}/>
          <Route path="/contact" element={<Contact/>}/>

          </Routes>



          {/* <Routes>
      <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/recipe" element={<Recipe/>}/>
      
    </Routes> */}

        {/* </div> */}




      {/* <h1> gghhhh</h1>
      <nav>
        <ul>
          <li><a href="/manatee">Manatee</a></li>
          <li><a href="/narwhal">Narwhal</a></li>
          <li><a href="/whale">Whale</a></li>
        </ul>
      </nav>

<Router>
{
<div>
  <Nav/>
  <h1> gghhhh</h1> */}
  {/* <Route exact path="/" component={HomePage} />
  <Route path="/about" component={AboutPage} /> */}
  {/* <Route path="/login1" component={Login} />
  <Route path="/recipe1" component={Recipes} />
</div>
</Router> */}
 </div>

  );
}

export default App;

