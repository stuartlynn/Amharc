import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import styled from 'styled-components';

import {
  OptionFragmentPropTypes,
  OptionFragmentDefaults,
} from './OptionFragmentConfig';

class OptionFragment extends Component {
  static propTypes = {
    ...OptionFragmentPropTypes,
  };

  constructor(props) {
    super(props);
    this.updateField.bind(this);
  }

  updateField(update) {
    this.props.onUpdate(update, this.props.id);
  }

  render() {
    return (
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">{this.props.prompt}</FormLabel>
          <RadioGroup
            aria-label={this.props.prompt}
            name={this.props.prompt}
            value={this.props.data.option}
            onChange={e => this.updateField({option: e.target.value})}>
            {this.props.parameters.options.map(option => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio color="primary" />}
                label={option}
                labelPlacement="start"
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

OptionFragment.defaultProps = OptionFragmentDefaults;

export default OptionFragment;
