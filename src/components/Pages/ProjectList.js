import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import ProjectCard from '../CommonUIComponents/ProjectCard'
import styled from 'styled-components'

const ProjectListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
`

class ProjectList extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ProjectListContainer>
        {this.props.projects.map(project => (
          <ProjectCard {...project} />
        ))}
      </ProjectListContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.data.Projects,
  };
};

export default connect(mapStateToProps)(ProjectList);
