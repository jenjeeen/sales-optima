import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './style.css';
import Binding from './views/binding';
import MessageUs from './views/message-us';
import Transaction from './views/transaction';
import Login from './views/login';
import ForgotPassword from './views/forgot-password';
import Product from './views/product';
import BusinessOwner from './views/business-owner';
import BackupRestorePage from './views/backup-restore-page';
import HelpCenterPage from './views/help-center-page';
import AdminBusinessOwnerDashboard from './views/admin-business-owner-dashboard';
import Customer from './views/customer';
import NotFound from './views/not-found';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Routes for each view */}
        <Route component={Binding} exact path="/binding" />
        <Route component={MessageUs} exact path="/message-us" />
        <Route component={Transaction} exact path="/transaction" />
        <Route component={Login} exact path="/login" />
        <Route component={ForgotPassword} exact path="/forgot-password" />
        <Route component={Product} exact path="/product" />
        <Route component={BusinessOwner} exact path="/" />
        <Route
          component={BackupRestorePage}
          exact
          path="/backup-restore-page"
        />
        <Route component={HelpCenterPage} exact path="/help-center-page" />
        <Route
          component={AdminBusinessOwnerDashboard}
          exact
          path="/admin-business-owner-dashboard"
        />
        <Route component={Customer} exact path="/customer" />

        {/* Route for 404 Not Found */}
        <Route component={NotFound} path="**" />

        {/* Redirect for any other unmatched routes */}
        <Redirect to="**" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
