import PropTypes from 'prop-types';
import CommonFragmentPropTypes from '../CommonFragmentPropTypes';

export const TextFragmentType = 'TextFragment'
export const FragmentVersion = '1.0'

export const TextFragmentPropTypes = {
  ...CommonFragmentPropTypes,
  propmpt: PropTypes.string.isRequired,
  icon: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export const TextFragmentDefaults={
  fragmentType: TextFragmentType,
  prompt: 'Enter some text',
}
