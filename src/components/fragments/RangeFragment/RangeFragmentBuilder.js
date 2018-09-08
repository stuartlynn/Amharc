import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  RangeFragmentPropTypes,
  RangeFragmentDefaults,
} from './RangeFragmentConfig';


class RangeFragmentBuilder extends Component {
  static propTypes = {
    ...RangeFragmentPropTypes,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  updateConfig(param) {
    this.props.onChange(this.props.name, param);
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Max Value</p>
        <input
          type="text"
          value={this.props.max}
          onChange={e => this.updateConfig({max: e.target.value})}
        />

        <p>Min Value</p>
        <input
          type="text"
          value={this.props.min}
          onChange={e => this.updateConfig({min: e.target.value})}
        />

        <p>Inital Value</p>
        <input
          type="text"
          value={this.props.inital}
          onChange={e => this.updateConfig({initalVal: e.target.value})}
        />

        <p>Steps</p>
        <input
          type="text"
          value={this.props.steps}
          onChange={e => this.updateConfig({steps: e.target.value})}
        />
      </div>
    );
  }
}

RangeFragmentBuilder.defaultProps = RangeFragmentDefaults;

export default RangeFragmentBuilder;
