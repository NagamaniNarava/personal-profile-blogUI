import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import BlogShow from './streams/BlogShow';
import Header from './Header';
import history from '../history';
import Footer from './footer';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/applicants/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/applicants/:id" exact component={StreamShow} />
            <Route path="/about" exact component={BlogShow} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
