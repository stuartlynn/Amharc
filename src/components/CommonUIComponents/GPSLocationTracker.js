import React, {Component} from 'react';
import PropTypes from 'prop-types';

class GPSLocationTracker extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  state = {
    deviceHasGeo: false,
    watchID: null,
    lat: null,
    lng: null,
  };

  constructor(props) {
    super(props);
    this.updateLocation = this.updateLocation.bind(this);
    this.locationError = this.locationError.bind(this);
  }

  updateLocation(position) {
    console.log('have new pos ', position)
    const newLoc = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      accuracy: position.coords.accuracy,
      heading: position.coords.heading,
      speed: position.coords.speed,
      lastReading: new Date()
    }
    this.setState(
      newLoc
    );

    if(this.props.onLocationChange){
      this.props.onLocationChange(newLoc)
    }
  }

  locationError(error) {}

  componentWillMount() {
    const geoOptions =  {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    }
    console.log("we have geolocation " ,  (' geolocation' in navigator))
    if ('geolocation' in navigator) {
      const watchID = navigator.geolocation.watchPosition(
        this.updateLocation,
        this.locationError,
        geoOptions,
      );
      this.setState({deviceHasGeo: true, watchID: watchID});
    } else {
      this.setState({deviceHasGeo: false});
    }
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.state.watchID);
  }

  render() {
    return this.state.deviceHasGeo ?
      <div>
      </div>
     :
      <h1> Count not get Geolocation</h1>
    ;
  }
}


export default GPSLocationTracker;
