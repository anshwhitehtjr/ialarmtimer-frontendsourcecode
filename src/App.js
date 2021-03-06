import Navbar from "./Components/AppComponents/Navbar";
import Home from "./Components/Pages/Home";
// import './Styles/docs.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./Components/Pages/About";

function App () {

  return (
    <Router>
      <Navbar title="Alarms & Timer" mode='light' />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
      </Switch>
    </Router>
  );
}

export default App;
