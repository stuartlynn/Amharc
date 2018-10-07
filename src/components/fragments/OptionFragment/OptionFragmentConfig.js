import PropTypes from 'prop-types';
import CommonFragmentPropTypes from '../CommonFragmentPropTypes';

export const OptionFragmentType= 'OptionFragment'
export const FragmentVersion = '1.0'

export const OptionFragmentPropTypes = {
  ...CommonFragmentPropTypes,
  prompt: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export const OptionFragmentDefaults={
  fragmentType: OptionFragmentType,
  prompt: 'Enter the Option',
}
