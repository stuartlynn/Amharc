import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ObservationTemplateList from '../ObservationTemplateList';
import {getActiveProjectWithObservationTemplates} from '../../modules/data/ProjectSelectors';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper'

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%:
  display:grid;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: 'cover';
`;

class Project extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    return (
      <div>
				<Paper>
					<ProjectImage src={this.props.project.img} />
					<div style={{boxSizing: 'border-box', padding: '0px 20px'}}>
						<Typography variant="headline" component="h2">
							{this.props.project.name}
						</Typography>
						<Typography component="p">{this.props.project.aim}</Typography>
						<ObservationTemplateList
							observationTemplates={this.props.project.observationTemplates}
							projectId={this.props.project.id}
						/>
					</div>
				</Paper>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  project: getActiveProjectWithObservationTemplates(state, props),
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Project);
