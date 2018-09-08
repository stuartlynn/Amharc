import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Fragments from '../Components/Fragments/Fragments';

const ObservationEditorContext = React.createContext();

class ObservationEditorProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  state = {
    addFragment: this.addFragment.bind(this),
    updateFragment: this.updateFragment.bind(this),
    removeFragment: this.removeFragment.bind(this),
    updateNewFragmentName: this.updateNewFragmentName.bind(this),


  constructor(props) {
    super(props);
  }

  updateNewFragmentName(e) {
    this.setState({
      newFragmentName: e.target.value,
    });
  }

  updateFragment(id, parameters) {
    const newFlow = this.state.observationFlow.map(fragment => {
      if (fragment.fragmentName !== id) {
        return fragment;
      }
      const oldParameters = fragment.fragmentParameters;
      const newParameters = {...oldParameters, ...parameters};
      return {...fragment, fragmentParameters: newParameters};
    });

    this.setState({observationFlow: newFlow});
  }

  removeFragment(id) {
    const newFlow = this.state.observationFlow.filter(
      fragment => fragment.fragmentName !== id,
    );
    this.setState({observationFlow: newFlow});
  }

  addFragment(type) {
    const name = this.state.newFragmentName;
    const newFragment = {
      fragmentName: name,
      fragmentType: type,
      fragmentParameters: Fragments[type].defaults,
    };
    this.setState({
      observationFlow: [...this.state.observationFlow, newFragment],
    });
  }

  render() {
    return (
      <ObservationEditorContext.Provider state={this.state}>
        {this.props.children}
      </ObservationEditorContext.Provider>
    );
  }
}

export default ObservationEditorProvider;
export const ObservationEditorConsumer = ObservationEditorProvider.Consumer;
