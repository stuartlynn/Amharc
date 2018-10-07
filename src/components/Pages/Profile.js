import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {getCurrentUser} from '../../modules/data/UsersSelectors'
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

const ProfileContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`
class Profile extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {user} = this.props
    return (
      <ProfileContainer>
        <Typography>{user.firstName}</Typography>
        <Typography>{user.lastName}</Typography>
        <Typography>{user.bio}</Typography>
      </ProfileContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: getCurrentUser(state)
  };
}

export default withRouter(connect(mapStateToProps)(Profile));
