import React, {useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import '../Styles/Login.css';


  const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      /*const response = await fetch('http://22a4-102-89-22-182.ngrok-free.app/api/UserIds', {
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
        alert("Welcome");
        navigate('/ ');
      } else {
        // Username and/or password are incorrect, display error message
       alert("wrong username and password");
      }
      */
      const validUsers = ['Kingsley', 'Victor', 'Ojei',  'Esther','Semilore'];
      const validPasswords = ['Kingsley123', 'Victor123', 'Ojei123','Esther123','Semilore123'];
      const isValidUser = validUsers.includes(username);
      console.log(validUsers);
      const isValidPassword = validPasswords.includes(password);
      if (isValidUser && isValidPassword) {
        alert('Login successful!');
        navigate('/transaction');
      } else {
        alert('Invalid username or password.');
      }
    };
    


    

    return (
    <div className="loginall">
      <div className="wrapper">
      <div className="entry" style={{ backgroundRepeat:"no-repeat", backgroundImage: "url(/Icons/GTCO-60.png)", marginLeft:"260px", position:"absolute" ,top:"180px", height: "400px", width: "400px" }}></div>
      
        <div className="login">
            <div className="container">
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="arrange">
                      <input type="text" placeholder="Enter Account number" value={username} onChange={(event) => setUsername(event.target.value)}/>
                      <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
    
                    <button className="loginButton">
                      <Link to="" className="link1">Login</Link>
                    </button>
                    </div>
                        
                  </form>

                </div>

                
                <div className="passwordlink">
                  <div><Link to="/createuser" className="link1">Create new user</Link></div>
                  <span><Link to="/" className="link2">Forgot password?</Link></span>
                </div>
            </div>
        </div>

      </div>
      
    </div>
  )
}

export default Login;