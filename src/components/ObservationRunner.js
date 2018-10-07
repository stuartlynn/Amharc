import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Fragments from './fragments';
import Typography from '@material-ui/core/Typography';
import FragmentCard from './CommonUIComponents/FragmentCard';
import ObservationRunnerHeader from './CommonUIComponents/ObservationRunnerHeader';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {
  startRecordForObservationTemplate,
  updateRecordForFragment,
  saveActiveObservation
} from '../modules/UI/ActiveObservationReducer';

import styled from 'styled-components';

const ObservationRunnerOuter = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 50px 1fr;
`;
const ObservationRunnerFragmentList = styled.div`
  box-sizing: border-box;
  padding: 0px 10px;
  height: 100%;
  overflow-y: scroll;
`;

class ObservationRunner extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    observation: PropTypes.object,
    observationTemplate: PropTypes.object,
    project: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.startNewRecord = this.startNewRecord.bind(this);
  }

  componentWillMount() {
    this.startNewRecord();
  }

  startNewRecord() {
    this.props.startRecordForObservationTemplate(
      this.props.observationTemplate,
      this.props.project.id,
    );
  }

  render() {
    if (this.props.observationTemplate === undefined) {
      return <h1>Loading </h1>;
    }
    return (
      <ObservationRunnerOuter>
        <ObservationRunnerHeader
          projectName={this.props.project.name}
          observationName={this.props.observationTemplate.name}
          onAbandon={this.startNewRecord}
          onSubmit={this.props.saveActiveObservation}
        />
        <ObservationRunnerFragmentList>
          {this.props.observationTemplate.fragmentTemplates.map(template => {
            const fragment = Fragments[template.type];
            //TODO Move this to a selector
            const data = this.props.observation.fragmentRecords.find(
              record => record.fragmentId === template.id,
            );
            if (fragment) {
              const Element = fragment.runner;
              return (
                <FragmentCard key={template.id} {...template}>
                  <Element
                    {...template}
                    onUpdate={this.props.updateRecordForFragment}
                    data={data ? data.data : {}}
                  />
                </FragmentCard>
              );
            } else {
              return (
                <div key={template.id}>
                  <h1> No fragment of this type</h1>
                </div>
              );
            }
          })}
        </ObservationRunnerFragmentList>
      </ObservationRunnerOuter>
    );
  }
}

const mapStateToProps = (state, props) => ({
  observation: state.ui.ActiveObservation,
});

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators(
    {
      startRecordForObservationTemplate,
      updateRecordForFragment,
      saveActiveObservation
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ObservationRunner);
