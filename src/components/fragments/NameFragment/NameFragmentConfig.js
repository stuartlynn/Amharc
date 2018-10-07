import PropTypes from 'prop-types';
import CommonFragmentPropTypes from '../CommonFragmentPropTypes';

export const NameFragmentType= 'NameFragment'
export const FragmentVersion = '1.0'

export const NameFragmentPropTypes = {
  ...CommonFragmentPropTypes,
  prompt: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export const NameFragmentDefaults={
  fragmentType: NameFragmentType,
  prompt: 'Enter the Name',
}
