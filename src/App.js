import logo from './logo.svg';
import './App.css';
import Home from './components/Homepage';
import Aboutme from './components/Aboutme';
import Gallery from './components/PhotoGallery';

function App() {
  return (
    <div className="App">
      <Home />
      <Aboutme/>
      <Gallery/>
    </div>
  );
}

export default App;
