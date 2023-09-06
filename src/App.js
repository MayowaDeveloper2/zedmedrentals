import { BrowserRouter, Routes, Route} from "react-router-dom"
import './all.css';
import './index.css';
import './typography.css';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Footer from './pages/footer';

function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
      </Routes>
     <Footer /> 
    </BrowserRouter>
    </>
  );
}

export default App;
