import PropTypes from 'prop-types';
import CommonFragmentPropTypes from '../CommonFragmentPropTypes';

export const GPSLocationFragmentType= 'GPSLocation'
export const FragmentVersion = '1.0'

export const GPSLocationFragmentPropTypes = {
  ...CommonFragmentPropTypes,
  prompt: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export const GPSLocationFragmentDefaults={
  fragmentType: GPSLocationFragmentType,
  prompt: 'This will record your location',
}
