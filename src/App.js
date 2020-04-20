import React, {Fragment, useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import Frontend from "./containers/Frontend/Frontend";
import Dashboard from "./containers/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import Layout from "./components/Layout/Layout"

import 'semantic-ui-css/semantic.min.css'
import {authCheck} from "./store/actions/authAction";

import './App.css';

function App() {
  const dispatch = useDispatch();
  const {isAuth} = useSelector(state => (state.auth));

  useEffect(() => {
    dispatch(authCheck());
  }, [dispatch, isAuth]);

  return (
      <Fragment>

        <Switch>
          <Layout>
            <Route exact path="/" component={Frontend}/>
            <Route exact path="/login" component={Login}/>
          <PrivateRoute path="/dashboard" component={Dashboard} isAuth={isAuth}/>
          </Layout>
        </Switch>
      </Fragment>
  );
}

export default App;
