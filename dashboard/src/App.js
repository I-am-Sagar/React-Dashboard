import React from "react";

import { Route, Switch } from "react-router-dom";

import Header from "./components/Navbars/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import routes from "./routes.js";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props} routes={routes}/>
        <div className="main-panel">
          <Header {...this.props} />
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route path={prop.layout + prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
          <hr/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
