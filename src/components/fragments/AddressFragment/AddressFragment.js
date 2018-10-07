import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import styled from 'styled-components';

import {
  AddressFragmentPropTypes,
  AddressFragmentDefaults,
} from './AddressFragmentConfig';

class AddressFragment extends Component {
  static propTypes = {
    ...AddressFragmentPropTypes,
  };

  constructor(props) {
    super(props);
    this.updateField = this.updateField.bind(this);
  }

  updateField(update) {
    this.props.onUpdate(update, this.props.id);
  }

  render() {
    const {
      address_no,
      address_street_name,
      address_city,
      address_state,
    } = this.props.data;

    return (
      <div>
        <Typography variant="title">{this.props.prompt}</Typography>

        <FormControl>
          <InputLabel htmlFor="address-no">No</InputLabel>
          <Input
            id="address-no"
            onChange={e => this.updateField({address_no: e.target.value})}
            value={address_no ? address_no : ''}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="address-street-name">Street Name</InputLabel>
          <Input
            id="address-street-name"
            onChange={e =>
              this.updateField({address_street_name: e.target.value})
            }
            value={address_street_name ? address_street_name : ''}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="address-city">City</InputLabel>
          <Input
            id="address-city"
            onChange={(e, value) =>
              this.updateField({address_city: e.target.value})
            }
            value={address_city ? address_city : ''}
          />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="address-state">State</InputLabel>
          <Input
            id="address-state"
            onChange={(e, value) =>
              this.updateField({address_state: e.target.value})
            }
            value={address_state ? address_state : ''}
          />
        </FormControl>
      </div>
    );
  }
}

AddressFragment.defaultProps = AddressFragmentDefaults;

export default AddressFragment;
