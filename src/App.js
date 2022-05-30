import logo from './logo.svg';
import './App.css';
import Home from './components/Homepage';
import Aboutme from './components/Aboutme';
import Gallery from './components/PhotoGallery';
import HomeComponent from './components/HomeComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <HomeComponent />
        </div>
    </BrowserRouter>
  );
}

export default App;
