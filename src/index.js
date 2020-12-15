import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/scss/blk-design-system-react.scss?v=1.2.0";
import "./assets/scss/style.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Switch>
      <Route path="/components" render={(props) => <App {...props} />} />
      <Redirect from="/" to="/components" />
      </Switch>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
