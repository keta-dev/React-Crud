import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import ErrorPage from './components/pages/ErrorPage';
import Adduser from './components/user/Adduser';
import EditUser from './components/user/EditUser';
import User from './components/user/User';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/add/user' component={Adduser}></Route>
          <Route exact path='/edit/user/:id' component={EditUser}></Route>
          <Route exact path='/user/:id' component={User}></Route>
          <Route exact path='*' component={ErrorPage}></Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
