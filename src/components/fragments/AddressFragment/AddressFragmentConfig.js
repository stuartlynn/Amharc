import PropTypes from 'prop-types';
import CommonFragmentPropTypes from '../CommonFragmentPropTypes';

export const AddressFragmentType= 'AddressFragment'
export const FragmentVersion = '1.0'

export const AddressFragmentPropTypes = {
  ...CommonFragmentPropTypes,
  prompt: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export const AddressFragmentDefaults={
  fragmentType: AddressFragmentType,
  prompt: 'Enter the Address',
}
