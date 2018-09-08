import PropTypes from 'prop-types';
import CommonFragmentPropTypes from '../CommonFragmentPropTypes';

export const RangeFragmentType = 'RangeFragment'
export const FragmentVersion = '1.0'

export const RangeFragmentPropTypes = {
  ...CommonFragmentPropTypes,
  propmpt: PropTypes.string.isRequired,
  icon: PropTypes.string,
  max:PropTypes.number,
  min:PropTypes.number,
  steps: PropTypes.number,
  initalValue:PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
};

export const RangeFragmentDefaults={
  fragmentType: RangeFragmentType,
  prompt: 'Select a max, min and steps no',
  max:100,
  min:0,
  steps: 100,
  initalValue:50
}
