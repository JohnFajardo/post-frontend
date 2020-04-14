import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './sass/styles.scss';
import Login from './components/Users/Login';
import SignUp from './components/Users/SignUp';
import Home from './components/Home/Home';
import Post from './components/Post/Post';


function App() {
  return (
    <div>
      <Switch>
        <Route path='/post/:id' component={Post} />
        <Route path='/signup' component={SignUp} />
        <Route path='/home' component={Home} />
        <Route path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;