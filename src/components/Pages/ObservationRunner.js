import React, { Component} from 'react';
import PropTypes from 'prop-types';

class ObservationRunner extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    observationSpec: PropTypes.object,
    active:PropTypes.boolean
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
    );
  }
}

export default ObservationRunner;
