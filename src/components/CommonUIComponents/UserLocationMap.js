import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const UserLocationMap = ({...props})=> {
  return (
    <Map style={{width:'200px', height: '200px'}} center={props.position} zoom={16}>
      <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position = {props.position}/>
    </Map>
  );
}

UserLocationMap.defaultProps = {};

UserLocationMap.propTypes = {};

export default UserLocationMap;
