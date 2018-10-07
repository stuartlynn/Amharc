import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import EditProject from '../CommonUIComponents/EditProject';
import Typography from '@material-ui/core/Typography';
import {getNewProjectState} from '../../modules/UI/NewProjectSelectors';
import {createProject} from '../../modules/data/ProjectsReducer';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';

import {
  updateNewProject,
  clearNewProject,
} from '../../modules/UI/NewProjectReducer';

class NewProject extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Paper
          style={{
            boxSizing: 'border-box',
            padding: '20px',
            margin: '20px',
          }}>
          <Typography variant="headline" component="h3">
            New Project
          </Typography>
          <EditProject
            project={this.props.project}
            onUpdate={this.props.updateNewProject}
            onSaveProject={() => this.props.createProject(this.props.project)}
          />
          <Link to="/projects"> Projects</Link>
        </Paper>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateNewProject,
      clearNewProject,
      createProject,
    },
    dispatch,
  );
};

const mapStateToProps = state => {
  return {
    project: getNewProjectState(state),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewProject);
