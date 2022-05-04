import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Home from './components/Home';
import Nav from './components/Nav';

import Login from './components/Login';
import Recipes from './components/Recipes';
import Edamams from './components/Edamams';
import Contact from './components/Contact';

import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { app } from './firebase.config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          alert("Submitted");
          console.log("Response", response)

        })
        .catch((error) => {
          console.log(error.code)
          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the Password');
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('Please check the Email');
          }
        })
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
          }
        })
    }
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (!authToken) {
      navigate('/home')
    }
  }, [])
  return (
    <div className="App">
      <>
        <ToastContainer />
        
        {/* <div> */}
        <Nav />

        <Routes>
          <Route
            path='/login'
            element={
              <Form
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
              />}
          />
          <Route
            path='/register'
            element={
              <Form
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
              />}
          />

          <Route
            path='/home'
            element={
              <Home />}
          />


          <Route path="/login" element={<Form/>}/>
          <Route path="/register" element={<Form/>}/>
          <Route path="/recipe1" element={<Recipes/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/edamam" element={<Edamams/>}/>  


        </Routes>
      </>
    </div>
  );
}

export default App;
