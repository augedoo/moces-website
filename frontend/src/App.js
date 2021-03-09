import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import StatusBar from './components/StatusBar';

function App() {
  return (
    <Router>
      <StatusBar />
      <Header />
      <Switch>
        <>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/news' component={NewsScreen} exact />
        </>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
