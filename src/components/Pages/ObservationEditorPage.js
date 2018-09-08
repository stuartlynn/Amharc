import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ObservationBuilder from './ObservationBuilder'

import {
  addFragment,
  removeFragment,
  updateFragment,
} from '../../modules/Data/ObservationEditorReducer';

class ObservationEditorPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ObservationBuilder
          observation={this.props.observation}
          onAddFragment={this.props.addFragment}
          onRemoveFragment={this.props.removeFragment}
          onUpdateFragment={this.props.updateFragment}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    observation: state.observationEditor,
});

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({
    addFragment,
    removeFragment,
    updateFragment
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ObservationEditorPage);
