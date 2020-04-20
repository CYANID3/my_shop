import React from 'react';
import {Link} from "react-router-dom";

const Frontend = () => {
  return (
      <div>
        Frontend here
        <div>
          <Link to="/dashboard">Go в админку</Link>
         
        </div>
      </div>
  );
};

export default Frontend;
