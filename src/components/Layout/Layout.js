import React from 'react';
import classes from './Layout.module.css';
import Aux from '../../hoc/Auxillary.js';
const Layout = (props) => (
<Aux>
  <div>Toolbar, SideDrawer, Backdrop</div>
  <main className={classes.Content}>
  {props.children}
    </main>

  </Aux>
);


export default Layout;
