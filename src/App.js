import Navbar from "./Components/AppComponents/Navbar";
import Home from "./Components/Pages/Home";
import './Styles/docs.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./Components/Pages/About";

function App () {
  const pages = [
    {
      pageTitle: 'Home',
      a: '/',
      status: 'active',
      sno: '1'
    },
    {
      pageTitle: 'About',
      a: '/about',
      status: 'active',
      sno: '2'
    }
  ];

  return (
    <Router>
      <Navbar title="Alarms & Timer" mode='light' pages={ pages } />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
      </Switch>
    </Router>
  );
}

export default App;
