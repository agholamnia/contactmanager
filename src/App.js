import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import AddContacts from "./components/contacts/AddContacts";
import Contacts from "./components/contacts/Contacts";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import EditContact from "./components/contacts/EditContact";
import Test from "./components/pages/test";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContacts} />
                <Route exact path="/about/" component={About} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
