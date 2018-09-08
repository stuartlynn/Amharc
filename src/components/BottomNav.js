import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import {connect} from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import BallotIcon from '@material-ui/icons/Ballot';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class BottomNav extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  handleChange(event, value) {
		switch(value){
			case 'projects':
				this.props.history.push('/projects')
				break
			case 'profile':
				this.props.history.push('/profile')
				break
			case 'contributions':
				this.props.history.push('/contributions')
				break
		}
  }

	constructor(props){
		super(props)
		this.handleChange= this.handleChange.bind(this)
	}
  segmentForPath() {
		console.log(this.props.path)
    if (this.props.path.includes('projects')) {
      return 'projects';
    } else if (this.props.path.includes('contributions')) {
      return 'contributions';
    } else if (this.props.path.includes('profile')) {
      return 'profile';
    }
  }
  render() {
		console.log(this.segmentForPath())
    return (
      <BottomNavigation
        value={this.segmentForPath()}
        onChange={this.handleChange}
        showLabels>
        <BottomNavigationAction
          label="Projects"
          value="projects"
          icon={<BallotIcon />}
        />
        <BottomNavigationAction
          label="Your Contributions"
          value="contributions"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          value="profile"
          label="Profile"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    );
  }
}

const mapStateToProps = state => {
  return {
    path: state.routing.location.pathname,
  };
};

export default connect(mapStateToProps)(withRouter(BottomNav));
