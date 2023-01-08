import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from "./Chat"
import Login from './Login';
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {


  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();



  return (
    <div className="app">

      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className='app_body'>
              <Sidebar />
              <Switch>
                <Route exact path="/room/:roomId">
                  <Chat />
                </Route>
                <Route exact path="/">
                  <h2>Welcome</h2>
                </Route>
              </Switch>
            </div>
          </>
        )}


      </Router>
    </div>
  );
}

export default App;
