import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CowsList from './Cows/CowsList';
import CowsDetails from './Cows/CowsDetail';
import Create from './Create';
import Header from './Header/Header';

class App extends Component {
  state = {};
  render(){
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
          <Switch>
              <Route exact path="/" component={CowsList}/>
              <Route path="/cows/:id" component={CowsDetails}/>
              <Route path="/create" component={Create}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
  }
}

export default App;
