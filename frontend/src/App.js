import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomeScreen from './screens/Home/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import StatusBar from './components/layout/StatusBar';
import ArticleScreen from './screens/ArticleScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';

function App() {
  return (
    <Router>
      <StatusBar />
      <Header />
      <Switch>
        <>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/news/articles' component={NewsScreen} exact />
          <Route path='/news/articles/:id' component={ArticleScreen} exact />
          <Route path='/login' component={LoginScreen} exact />
        </>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
