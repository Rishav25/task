import {useState} from 'react';

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [passwordLen,setPasswordLen] = useState(false);

    const loginData = [
        {name : "Person1",
         pass : "IamPerson1"
        }, 
        {name : "Person2",
         pass : "IamPerson2"}
        ];

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        let obj = loginData.find(o => o.name === username);
        if(!obj || obj.pass !== password)
        {
            setError('Username or Password is Incorrect');
        }
        else if(obj.pass === password)
        {
            localStorage.setItem('UserName',username);
            localStorage.setItem('Password',password);
            window.location.reload();
            setError('');
        }

    }

    const passwordLength = (e) => {
        
        setPassword(e.target.value);
        console.log(e.target.value);
        
        //React state does not change the value of the variable immediately
        //For proper check of length I check the length of e.target.value
        //So instead of taking length of password
        //I take length of e.target.value
        //giving accurate results
        
        var len = e.target.value.length;
        console.log(len);
        if(len>7)
        {
            setPasswordLen(true);
        }
        else
        {
            setPasswordLen(false);
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">WELCOME</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) =>setUsername(e.target.value)}
                    className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={passwordLength}
                    className="input" placeholder="Password" required/>
                    <h2>{passwordLen ? 'Valid Password' : 'Password must be of 8 characters'}</h2>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>

            </div>
        </div>

    );

};
export default Login;
