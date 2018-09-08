import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  TextFragmentPropTypes,
  TextFragmentDefaults,
} from './TextFragmentConfig';

class TextFragment extends Component {
  static propTypes = {
    ...TextFragmentPropTypes,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.prompt}</p>
        <input type="text" onChange={this.props.onValueChanged} />
      </div>
    );
  }
}

TextFragment.defaultProps = TextFragmentDefaults

export default TextFragment;
