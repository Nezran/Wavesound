import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Search from '../scenes/search'
import Artistes from '../scenes/artistes'
import Artist from '../scenes/artist'
import Header from '../scenes/header'
import Auth from './Auth'
import moment from 'moment'

class App extends Component {

  render() {

    const now = moment();
    const endDate = moment(sessionStorage.getItem('expire_at'));
    const token = moment(sessionStorage.getItem('access_token'));

    return (
      <div className="App">
        <header className="App-header">
            <p className="App-title">Application d'exemple qui permet de rechercher un artiste et afficher son profil depuis l'API Spotify </p>
            <p>React - Redux - Rest API</p>
        </header>
          { token == null || endDate == null || now.isBefore(endDate) ?
              (
                  <div>
                      <Search/>
                      <Artistes/>
                  </div>
              )
              :
              (
                  <a href="https://accounts.spotify.com/authorize?client_id=e9cf784964ce4b1985972061a744d5bc&redirect_uri=http://localhost:3000/auth/callback&scope=user-read-private%20user-read-email&response_type=token&state=123">Se connecter</a>
              )
          }
      </div>
    );
  }
}

const Root = () => (
    <Router>
        <div style={{padding:'20px'}}>
            <Header/>
            <Route exact path="/" component={App}/>
            <Route exact path="/auth/callback" component={Auth}/>
            <Route exact path={`/artists/:id`} component={Artist}/>
        </div>
    </Router>
)

export default Root;
