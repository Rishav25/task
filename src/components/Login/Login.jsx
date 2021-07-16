import {useState} from 'react';

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

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

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">WELCOME</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) =>setUsername(e.target.value)}
                    className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)}
                    className="input" placeholder="Password" required/>
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