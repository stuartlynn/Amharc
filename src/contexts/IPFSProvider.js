import React, { Component} from 'react';
import PropTypes from 'prop-types';
import IPFS from 'ipfs'

const IPFSContext = React.createContext();
const node = new IPFS()

class IPFSProvider extends Component {
  state={
    status: 'connecting'
  }
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  componentDidMount() {
    this.setState({status:'connecting'})

    node.on('ready', (id) => {
      this.setState({status:'connected', nodeID: id})
    })
  }
  componentWillUnmount() {
    node.stop(() => {
      console.log('node stopped')
    })
  }

  render() {
    return (
      <IPFSContext.Provider value={this.state}>
        {this.props.children}
      </IPFSContext.Provider>
    );
  }
}

export default IPFSProvider;
export const IPFSConsumer = IPFSContext.Consumer
