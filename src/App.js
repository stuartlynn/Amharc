import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
import {Theme} from './Theme';
import styled from 'styled-components';
import {Route, Switch} from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Projects from './components/Pages/Projects';
import MakeObservationPage from './components/Pages/MakeObservationPage';
import ProjectObservationTemplatePage from './components/Pages/ProjectObservationTemplatePage';
import Project from './components/Pages/Project';
import NewProject from './components/Pages/NewProject';
import Profile from './components/Pages/Profile';
import Home from './components/Pages/Home';
import {bindActionCreators} from 'redux';
import {connectBackend, loadAllResource} from './backends/Orbit/reducer';
import {connect} from 'react-redux';

import {withRouter} from 'react-router-dom';

import './App.css';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0px;
  margin: 0px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 0px 1fr 50px;
  grid-template-areas:
    'header'
    'content'
    'bottomNav';
`;

class App extends Component {
  componentWillMount() {
    this.props.connectBackend()
    setTimeout(()=>{
    this.props.loadAllResource()
    },200)
  }

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <AppContainer>
          <div style={{gridArea: 'content', overflowY: 'scroll'}}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects/" component={Projects} />
              <Route exact path="/profile/" component={Profile} />
              <Route exact path="/projects/:projectId" component={Project} />

              <Route exact path="/new_project" component={NewProject} />
              <Route
                exact
                path="/projects/:projectId/makeObservation/:observationTemplateId"
                component={MakeObservationPage}
              />
            </Switch>
          </div>
          <div style={{gridArea: 'bottomNav'}}>
            <BottomNav />
          </div>
        </AppContainer>
      </ThemeProvider>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      connectBackend,
      loadAllResource,
    },
    dispatch,
  );

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(App),
);
