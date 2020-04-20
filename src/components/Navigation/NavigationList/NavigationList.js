import React from 'react';
import {NavLink} from "react-router-dom";
import './NavigationList.css';
import { Button } from 'semantic-ui-react';

const NavigationList = () => {
  return (

      <ul className="NavigationItems">
        <li className="NavigationItem">
          <NavLink to="/" exact>Main</NavLink>
        </li>
        <li className="NavigationItem">
          <NavLink to="/mens">Men's</NavLink>
        </li>
        <li className="NavigationItem">
          <NavLink to="/womans">Woman's</NavLink>
        </li>
        <li className="NavigationItem">
          <NavLink to="/kids">Kid's</NavLink>
        </li>
        <li className="NavigationItem">
          <NavLink to="/sports">Sports</NavLink>
        </li>
        <li className="NavigationItem">
          <NavLink to="/brands">Brands</NavLink>
        </li>
        <li className="NavigationItem">
          <NavLink to="/collections">Collections</NavLink>
        </li>
      <Button className="ADMIN">
             <NavLink to="/dashboard">Admin-panel</NavLink>
      </Button>
      </ul>
   
  );
}; 

export default NavigationList;
