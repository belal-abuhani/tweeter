import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"


function App() {
  return (
    <div className="App">

      {/* Navbar */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
