import React from 'react';
import "../styles/appStyles.scss";
import classes from "../styles/appStyles.scss";
import logo from "../../src/assets/images/logo.png";


const App = (): JSX.Element => {

  return <div>
    <>
    <div className={classes.container}>
    <h1 className={classes.redBackground}>Hello world</h1>
    <img src={logo}/>
    </div>
    </>
  </div>;
}

export default App;