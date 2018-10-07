import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import UserLocationMap from '../../CommonUIComponents/UserLocationMap';
import GPSLocationTracker from '../../CommonUIComponents/GPSLocationTracker';
import {geolocated} from 'react-geolocated';

import {
  GPSLocationFragmentPropTypes,
  GPSLocationFragmentDefaults,
} from './GPSLocationFragmentConfig';

class GPSLocationFragment extends Component {
  static propTypes = {
    ...GPSLocationFragmentPropTypes,
  };

  constructor(props) {
    super(props);
    this.updateField = this.updateField.bind(this);
  }

  updateField(update) {
    this.props.onUpdate(update, this.props.id);
  }

  render() {
    return (
      <div>
        {this.props.data && this.props.data.lat && this.props.data.lng ? (
          <div>
            <UserLocationMap
              baseMap={'osm'}
              position={[this.props.data.lat, this.props.data.lng]}
            />
            <Typography>Lat: {this.props.data.lat} </Typography>
            <Typography>Lng: {this.props.data.lng} </Typography>
          </div>
        ) : (
          <h2>No location data yet</h2>
        )}
        <GPSLocationTracker onLocationChange={this.updateField} />
      </div>
    );
  }
}

GPSLocationFragment.defaultProps = GPSLocationFragmentDefaults;

export default GPSLocationFragment;
