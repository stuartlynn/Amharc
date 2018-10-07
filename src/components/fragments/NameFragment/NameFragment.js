import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import styled from 'styled-components';

import {
  NameFragmentPropTypes,
  NameFragmentDefaults,
} from './NameFragmentConfig';

class NameFragment extends Component {
  static propTypes = {
    ...NameFragmentPropTypes,
  };

  constructor(props) {
    super(props);
    this.updateField = this.updateField.bind(this);
  }

  updateField(update) {
    this.props.onUpdate(update, this.props.id);
  }

  render() {
    const {name_first, name_middle, name_last} = this.props.data;

    return (
      <div>
        <Typography variant="title">{this.props.prompt}</Typography>

        <FormControl>
          <InputLabel htmlFor="name-first">First Name</InputLabel>
          <Input
            id="name-first"
            onChange={e => this.updateField({name_first: e.target.value})}
            value={name_first ? name_first : ''}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="middle-name">Middle Name</InputLabel>
          <Input
            id="middle-name"
            onChange={e => this.updateField({name_middle: e.target.value})}
            value={name_middle ? name_middle : ''}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="last-name">Last Name</InputLabel>
          <Input
            id="last-name"
            onChange={e => this.updateField({name_last: e.target.value})}
            value={name_last ? name_last : ''}
          />
        </FormControl>
      </div>
    );
  }
}

NameFragment.defaultProps = NameFragmentDefaults;

export default NameFragment;
