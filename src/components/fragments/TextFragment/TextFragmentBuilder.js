import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
  P,
  Title,
  Heading,
  SubHeading
} from '../../../Theme'

import {
  TextFragmentPropTypes,
  TextFragmentDefaults,
} from './TextFragmentConfig';

class TextFragmentBuilder extends Component {
  static propTypes = {
    ...TextFragmentPropTypes,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.updateConfig = this.updateConfig.bind(this)
  }

  updateConfig(param){
    this.props.onChange(this.props.name, param)
  }

  render() {
    return (
      <div className="textFragmentBuilder">
        <SubHeading>{this.props.name}</SubHeading>
        <P>Prompt:</P>
        <input
          type="text"
          value={this.props.prompt}
          onChange={e =>
            this.updateConfig({prompt: e.target.value})
          }
        />
        <button onClick={()=> this.props.onRemove(this.props.name)}>
          Remove
        </button>

      </div>
    );
  }
}

TextFragmentBuilder.defaultProps = TextFragmentDefaults;
export default TextFragmentBuilder;
