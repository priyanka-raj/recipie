//conntact.js
import { jsonEval } from '@firebase/util'
import React, {useState} from 'react'
import"../App.css"
import {db} from "../firebase.config"

const Contact = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[message,setMessage] = useState("")

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     db.collection("contacts")
    //     .add({
    //         name: name,
    //         email: email,
    //         message: message,
    //     })
    //     .then(() => {
    //         alert("Message has been submitted");
    //     })
    //     .catch((error) =>{
    //         alert(error.message);
    //     });

    //     setName("")
    //     setEmail("")
    //     setMessage("")
    // }

    const postData = async(e) => {
        e.preventDefault();
      const res = await fetch("https://it354recipie-default-rtdb.firebaseio.com/contacts.json",{
        mode: 'no-cors',
      method: "POST",
          headers:  {
              "Content-Type": "application/json",
          },

          body: JSON.stringify({
              name,
              email,
              message,
          }),
        }
      );
      if (res) {
      setName("")
        setEmail("")
     setMessage("")
    }
alert("Submitted Successfully");


    };

  return (
    <div class="container">
    <h1 className="mt-5 text-center">Contact Us</h1>
    <div className='container mt-5 p-5'>
    {/* <section class="p-5"> */}

       
       <form className="add-form"  method = "POST"  onSubmit={postData}> 
           
    <div className="form-groupc" >
        <label htmlFor="name" >Name</label>
        <input type="text" className="form-control" placeholder="Enter name"
        value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
    <div className="form-groupc">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" aria-describedby="emailHelp"
        value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="form-groupc">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5" placeholder="Enter message"
        value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
    </div>


{/* <div className='form-control'>
        <label for="postTitle" class="form-label">
              Name
            </label>
            <input
              type="text" class="form-control" id="postTitle"
              value={name} onChange={(e) => setName(e.target.value)}
              aria-describedby="Help"></input>
      </div>


      <div className='form-control'>
        <label for="postTitle" class="form-label">
            Email address
            </label>
            <input
              type="text" class="form-control" id="postTitle"
              value={email} onChange={(e) => setEmail(e.target.value)}
              aria-describedby="Help"></input>
      </div>
   

      <div className='form-control'>
        <label for="postTitle" class="form-label">
              Message
            </label>
            <textarea
              class="form-control" id="contentInput"
              value={message} onChange={(e) => setMessage(e.target.value)} rows="5"></textarea>
    
      </div>
   */}
    {/* <button type="submit" className='btn btn-info mx-auto d-block mt-2'onClick ={postData}>Submit</button> */}
    <button className="button" onClick ={postData}>Submit</button>

   
</form> 
{/* </section> */}
    </div>
    </div>
  )
}


export default Contact