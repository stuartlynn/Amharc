//import React, {Component} from 'react';
//import PropTypes from 'prop-types';
//import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
//import ObservationTemplateList from '../ObservationTemplateList'
//import {getObservationTemplatesForProject} from '../../modules/data/ObservationTemplateSelectors';
//import {getActiveProject} from '../../modules/data/ProjectSelectors';

//class ProjectObservationTemplatePage extends Component {
  //static propTypes = {
    //children: PropTypes.node,
    //className: PropTypes.string,
  //};

  //render() {
    //return (
      //<div>
        //<h1>{this.props.project.name}</h1>
        //<ObservationTemplateList observationTemplates= {this.props.observationTemplates} />
      //</div>
    //);
  //}
//}

//const mapStateToProps = (state, props) => ({
  //project: getActiveProject(state, props),
  //observationTemplates: getObservationTemplatesForProject(state, props.match.params.projectId)
//});

//const mapDispatchToProps = dispatch => {
  //return bindActionCreators({}, dispatch);
//};

//export default connect(
  //mapStateToProps,
  //mapDispatchToProps,
//)(ProjectObservationTemplatePage);
