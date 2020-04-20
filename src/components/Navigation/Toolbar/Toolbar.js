import React from 'react';
import './Toolbar.css';
import NavigationList from "../NavigationList/NavigationList";

const Toolbar = () => {
  return (

        <header className="Toolbar">
        <nav>
          <NavigationList/>
        </nav>
      </header>  
  );
};

export default Toolbar;
