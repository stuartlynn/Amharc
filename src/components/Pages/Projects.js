import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectList from '../CommonUIComponents/ProjectList'
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from 'react-router-dom';

class Projects extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProjectList />
        <Link to="/new_project">
          <Button variant="fab" color="primary" aria-label="Add">
            <AddIcon />
          </Button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default withRouter(connect(mapStateToProps)(Projects));
