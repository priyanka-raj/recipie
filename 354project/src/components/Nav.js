import Login from './Login';
import Recipes from './Recipes';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Nav() {
    return (
    <div>
<div class="nav_colore">
<h1
style={{
  textAlign: 'center',
  color: ''
}}
>Yummyness</h1>

<nav class="navbar navbar-expand-lg navbar-light" 
style={{
  backgroundColor: 'mediumaquamarine',
}}
 >
            <div class="container">
               {/* <a class="navbar-brand" href="#">Yummyness</a> */}
               <h2
               style={{
                color: 'orangered',
              
              }}
               > Recipes for yummyness</h2>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse"id="navbarMenu">
                  <ul class="navbar-nav ms-auto">
                     <li class="nav-item">
                        <a href="/home" class="nav-link">Home</a>
                     </li>
                     <li class="nav-item">
                        <a href="/login" class="nav-link">Login</a>
                     </li>
                     <li class="nav-item">
                        <a href="/register" class="nav-link">Register</a>
                     </li>
                     <li class="nav-item">
                        <a href="/recipe1" class="nav-link">Recipes</a>
                     </li>
                     
                     <li class="nav-item">
                        <a href="/edamam" class="nav-link">Edamam Recipes</a>
                     </li>
                     <li class="nav-item">
                        <a href="/contact" class="nav-link">Contact</a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>

</div>


      {/* <ul>
        <li>
          <Link to="/login1">Login</Link>
        </li>
        <li>
          <Link to="/recipe1">Recipes</Link>
        </li>
        <li>
        <Link to="/contact">ContactUs</Link>
      </li>
      </ul> */}


      
    </div>
  );
}
  export default Nav;
  