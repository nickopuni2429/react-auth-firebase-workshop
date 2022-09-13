import React from 'react';
import Header from './Header';
import './App.css';
import './firebase/config';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import ForgotPassword from './pages/ForgotPassword';
import { UserProvider } from './firebase/UserProvider';
// import Profile from './pages/Profile';
// import ProfileRedirect from './router/ProfileRedirect';
// import PrivateRoute from './router/PrivateRoute';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header></Header>
        <div className="app">
          <div className="ui grid container">
            <Switch>
              {/* <PrivateRoute exact path="/profile/:id" component={Profile} /> */}
              {/* <ProfileRedirect exact path="/signup" component={Signup} /> */}
              {/* <ProfileRedirect exact path="/login" component={Login} /> */}
              {/* <ProfileRedirect exact path="/forgotpassword" component={ForgotPassword} /> */}
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
