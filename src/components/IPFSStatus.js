import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {IPFSConsumer} from '../Contexts/IPFSProvider'

class IPFSStatus extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <IPFSConsumer>
        {context=>(
          <React.Fragment>
            <p>Status is {context.status} </p>
            <p>Node id is {context.nodeID} </p>
          </React.Fragment>
        )}
      </IPFSConsumer>
    );
  }
}

export default IPFSStatus;
