import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
import ObservationRunner from '../ObservationRunner';
import {getActiveObservationTemplateWithFragmentTemplates} from '../../modules/data/ObservationTemplateSelectors';
import {getActiveProject} from '../../modules/data/ProjectSelectors';

const MakeObservationPageOuter = styled.div`
  width: 100%;
  height: 100%;
`;
class MakeObservationPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MakeObservationPageOuter>
        <ObservationRunner
          observationTemplate={this.props.observationTemplate}
          project={this.props.project}
        />
      </MakeObservationPageOuter>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    observationTemplate: getActiveObservationTemplateWithFragmentTemplates(
      state,
      props,
    ),
    project: getActiveProject(state, props),
  };
}

export default connect(mapStateToProps)(MakeObservationPage);
