import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Users></Users>
    </div>
  );
}

export default App;
