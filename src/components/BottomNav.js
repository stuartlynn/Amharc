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
import { withRouter } from 'react-router'

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

			case 'ipfs':
				this.props.history.push('/ipfs')
				break
		}
  }

	constructor(props){
		super(props)
		this.handleChange= this.handleChange.bind(this)
	}
  segmentForPath() {
    const pathname = this.props.location.pathname
    if (pathname.includes('projects')) {
      return 'projects';
    } else if (pathname.includes('contributions')) {
      return 'contributions';
    } else if (pathname.includes('profile')) {
      return 'profile';
    }
  }
  render() {
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
        <BottomNavigationAction
          value="ipfs"
          label="ipfs"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    );
  }
}


export default withRouter(connect()(BottomNav));
