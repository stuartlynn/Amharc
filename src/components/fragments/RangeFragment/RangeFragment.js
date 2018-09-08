import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {RangeFragmentPropTypes} from './RangeFragmentConfig';
import Slider from 'rc-slider';

export const RangeFragmentType = 'TextFragment';

class RangeFragment extends Component {
  static propTypes = {
    ...RangeFragmentPropTypes,
    children: PropTypes.node,
    className: PropTypes.string,
    prompt: 'Select the value',
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <p>{this.props.prompt}</p>
        <Slider
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          onChange={this.props.onChange}
        />
        <p>{this.props.val}</p>
      </div>
    );
  }
}

RangeFragment.defaultProps = {
  fragmentType: RangeFragmentType,
  prompt: 'Enter some text',
  max: 0,
  min: 100,
  step: 1,
};

export default RangeFragment;
