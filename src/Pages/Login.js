import React, {useState} from 'react';
import {Link } from "react-router-dom";
import "./Login.css";


  const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //const navigate = useNavigate()
  
    /*const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await fetch('http://22a4-102-89-22-182.ngrok-free.app/api/UserIds', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      const data = await response.json();
      console.log(data);
      if (data.ok) {
        // Username and password are correct, navigate to another page
        alert('Invalid username or password');
      } else {
        // Username and/or password are incorrect, display error message
        alert("Welcome");
        navigate('/dashboard');
      }
    };
    */


    

    return (
    <div className="loginall">
      <div className="all" style={{ backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundImage: "url(/icons/house_635VI.jpg)",opacity:"1", positon:"relative", height: "100vh", width: "100%" }}>
        <div className="wrapper">
        <div className="entry" style={{ backgroundRepeat:"no-repeat", backgroundImage: "url(/icons/gtcologo.png)", marginLeft:"180px", position:"absolute" ,top:"180px", height: "350px", width: "400px" }}></div>
      </div>
        <div className="login">
            <div className="container">
                <div className="form">
                  <form>
                    <input type="text" placeholder="Enter Account number" value={username} onChange={(event) => setUsername(event.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
    
                    <button className="loginButton">
                      <Link to="/budget" className="link1">Login</Link>
                    </button>
                        
                  </form>

                </div>

                
                <div className="passwordlink">
                    <Link to="/" className="link1">Forgot password?</Link>
                    <Link to="/Createuser" className="link2">Create new user</Link>
                </div>
            </div>
        </div>

      </div>
      
    </div>
  )
}

export default Login;