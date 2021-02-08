import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './Auth';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserProfile from './components/UserProfile/UserProfile';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Login} />
          <Route exact path="/home" component={UserProfile} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    </AuthProvider>
    // <div className="App">
    //   <Login />
    //   <Register />
    //   <UserProfile />
    // </div>
  );
}

export default App;
