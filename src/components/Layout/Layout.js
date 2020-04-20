import React, {Fragment} from 'react';
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => {
  return (
      <Fragment>
        <Toolbar/>
        <main className="Layout-Content" style={{marginTop: '30px'}}>
          {props.children}
        </main>
      </Fragment>
  );
};

export default Layout;