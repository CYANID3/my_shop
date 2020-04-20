import React, {createContext, useState} from 'react';
import Sidebar from "../../components/AdminPanel/Sidebar/Sidebar";
import DashMain from "../../components/AdminPanel/DashMain/DashMain";
import {Route, Switch} from "react-router-dom";
import Analytics from "../../components/AdminPanel/Analytics/Analytics";
import Sells from "../../components/AdminPanel/Sells/Sells";

import './Dashboard.css';

export const DashBoardContext = createContext();

const Dashboard = ({history}) => {
  const [show, setShow] = useState(false);

  return (
      <div className="dashboard">
        <DashBoardContext.Provider value={{
          history,
          show,
          setShow
        }}>
          <Sidebar/>
          <DashMain>
            <Switch>
              <Route exact path='/dashboard/' component={Analytics}/>
              <Route exact path="/dashboard/sells" component={Sells}/>
            </Switch>
          </DashMain>
        </DashBoardContext.Provider>
      </div>
  );
};

export default Dashboard;
