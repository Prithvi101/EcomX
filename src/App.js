import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
