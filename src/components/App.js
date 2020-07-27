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
import ProfileSearch from './search/profile-search';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/applicants/new" exact component={StreamCreate} />
            <Route path="/applicant/edit/:id" exact component={StreamEdit} />
            <Route path="/applicant/delete/:id" exact component={StreamDelete} />
            <Route path="/applicants/:id" exact component={StreamShow} />
            <Route path="/about" exact component={BlogShow} />
            <Route path="/search" exact component={ProfileSearch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
