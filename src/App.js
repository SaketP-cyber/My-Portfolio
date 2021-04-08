import React from "react";
import { Container, Grid } from "@material-ui/core";
import Profile from "./components/profile/Profile";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Container className="top_marg">
        <Grid container spacing={7}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Router>
              <Header />
              <div className="container_shadow main_content">
              <Switch>
                <Route exact path="/" >
                  <Resume />
                </Route>
              <Route  exact path="/portfolio" component={Portfolio} />
              </Switch>
              </div> 
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
