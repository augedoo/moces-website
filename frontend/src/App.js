import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/Home/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import StatusBar from './components/StatusBar';
import ArticleScreen from './screens/ArticleScreen';

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
        </>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
