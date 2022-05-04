import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Car from './Car';
import d from './image/r1.jpg';

const clips = 
    {
        pic: './image/r1.jpg'
    }
export default function Home() {
    var authToken="";
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();
    useEffect(() => {
         authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken)
        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])

    // console.log("is  ", sessionStorage.getItem('Auth Token').length)
   
    if((sessionStorage.getItem('Auth Token') === null) ||(sessionStorage.getItem('Auth Token').length==0)){
        console.log("Hey1")
        console.log("is null ", authToken.length)

        return (
            
            <div>
                <h2 className="mt-5 text-center">Click to log in</h2>
                <button onClick={handleLogout}>Log in</button>
                {/* <img src={d} class="d-block w-100" alt="Image"/>  */}

<Car/>

            </div>
        )
    }
    if((sessionStorage.getItem('Auth Token') === null) || (sessionStorage.getItem('Auth Token').length!=0)){
        console.log("Hey2")
        return (

            <div>
                <h2 className="mt-5 text-center">Click to log out</h2>
                <button onClick={handleLogout}>Log out</button>
                <Car/>

            </div>
        )
    }
  
}
