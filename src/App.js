import { BrowserRouter, Routes, Route} from "react-router-dom"
import './all.css';
import './index.css';
import './typography.css';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Footer from './pages/footer';
import Ourteam from "./pages/ourteam";
import Whoweare from "./pages/whoweare";

function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/our-team" exact Component={Ourteam} />
        <Route path="/who-we-are" exact Component={Whoweare} />

      </Routes>
     <Footer /> 
    </BrowserRouter>
    </>
  );
}

export default App;
