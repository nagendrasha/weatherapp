import './App.css';
import Login from './componants/Login';
import Profile from './componants/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
    <h2>React Context Api</h2>
    <Login/>
    <Profile/>
    </UserContextProvider>
  );
}

export default App;
