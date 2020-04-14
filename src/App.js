import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './sass/styles.scss';
import Login from './components/Users/Login';
import SignUp from './components/Users/SignUp';
import Home from './components/Home/Home';
import Post from './components/Post/Post';
import NewPost from './components/NewPost/NewPost';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div>
      <Switch>
        <Route path='/post/new' component={NewPost} />
        <Route path='/post/:id' component={Post} />
        <Route path='/signup' component={SignUp} />
        <Route path='/home' component={Home} />
        <Route path='/404' component={NotFound} />
        <Route path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;