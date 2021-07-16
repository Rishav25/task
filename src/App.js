import './index.css';
import Login from './components/Login/Login.jsx';
import Profile from './components/Profile/Profile.jsx';
function App() {

  if(!localStorage.getItem('UserName'))return (<Login></Login>);
  return(
    <Profile></Profile>
  )
}

export default App;
