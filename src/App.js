import React, {Component} from 'react';
import ProjectList from './components/Pages/ProjectList';
import ProjectObservationTemplatePage from './components/Pages/ProjectObservationTemplatePage'
import Project from './components/Pages/Project'
import Home from './components/Home'
import {ThemeProvider} from 'styled-components';
import {Theme} from './Theme';
import styled from 'styled-components';
import {Route} from 'react-router-dom'
import BottomNav from './components/BottomNav'

import './App.css';

const AppContainer = styled.div`
  width:100%;
  height: 100%;
  position:relative;
  padding:0px;
  margin:0px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 0px 1fr 50px;
  grid-template-areas:
    "header"
    "content"
    "bottomNav"
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <AppContainer>
          <div style={{gridArea:'content',overflowY:'scroll'}}>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects/" component={ProjectList} />
            <Route exact path="/projects/:projectId" component={Project} />
            <Route exact path="/projects/:projectId/makeObservation/:observationTemplateId" component={Project} />
            <Route exact path="/projects/:projectId/observationTemplates" component={ProjectObservationTemplatePage} />
          </div>
          <div style={{gridArea:'bottomNav'}}>
            <BottomNav />
          </div>
        </AppContainer>
      </ThemeProvider>
    );
  }
}

export default App;
