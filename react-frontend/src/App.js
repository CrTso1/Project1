import logo from './logo.svg';
import './App.css';
import ListClassComponent from './components/ListClassComponent'
import MainComponent from './components/MainComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import CreateClassComponent from './components/CreateClassComponent'
import UpdateClassComponent from './components/UpdateClassComponent'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent></HeaderComponent>
          <div className="container">
            <Switch>
              <Route exact path = '/' component = {ListClassComponent}></Route>
              <Route path = '/add-class' component ={CreateClassComponent}></Route>
              <Route path = '/update-class/:id' component = {UpdateClassComponent}></Route>
            </Switch>
          </div>
          {/* <FooterComponent></FooterComponent> */}
      </Router>
    </div>
  );
}

export default App;
