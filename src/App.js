import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about/about.component';
import ContactPage from './pages/contact/contact.component';
import ExercisesPage from './pages/exercises/exercises.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {

  constructor () {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsuscribeFromAuth = null;

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);

        });
      }
      this.setState({ currentUser: userAuth });
    });
  } 

  componentWillUnmount(){
    this.unsuscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser = {this.state.currentUser} /> 
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/exercises" component={ExercisesPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch> 
      </div>
    );
  }
}


export default App;
