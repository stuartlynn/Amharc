import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import ProjectCard from '../CommonUIComponents/ProjectCard';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import {bindActionCreators} from 'redux';

import {deleteResource} from '../../backends/Orbit/reducer';

//TODO this probably sould be a functional component or retied entierly
const ProjectListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
`;

class ProjectList extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <ProjectListContainer>
        {this.props.projects.map(project => (
          <ProjectCard key={project.id} {...project}
            onDelete={()=>{
              this.props.deleteResource('Projects',project)
            }}/>
        ))}
      </ProjectListContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteResource,
    },
    dispatch,
  );
};

const mapStateToProps = state => {
  return {
    projects: state.data.Projects,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectList);
