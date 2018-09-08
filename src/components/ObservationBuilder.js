import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Fragments from './Fragments/Fragments';

class ObservationBuilder extends Component {
  state = {
    newFragmentName: null,
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    observation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.updateNewFragmnetName = this.updateNewFragmnetName.bind(this);
  }

  updateNewFragmnetName(e) {
    this.setState({
      newFragmentName: e.target.value,
    });
  }

  render() {
    const observation = this.props.observation;
    if (!observation) {
      return <p>No Observation</p>;
    }
    return (
      <div>
        <div className="Fragments">
          {observation.flow.map(fragment => {
            const Node = Fragments[fragment.fragmentType].builder;
            const {fragmentParameters} = fragment;
            return (
              <Node
                key={fragment.fragmentName}
                name={fragment.fragmentName}
                {...fragmentParameters}
                onChange={this.props.onUpdateFragment}
                onRemove={this.props.onRemoveFragment}
              />
            );
          })}
        </div>
        <div className="AddFragment">
          <span>Fragment Name</span>
          <input type="text" onChange={this.updateNewFragmentName} />
          <button
            onClick={() =>
              this.props.onAddFragment(
                'TextFragment',
                this.state.newFragmentName,
              )
            }>
            Text
          </button>
          <button
            onClick={() =>
              this.props.onAddFragment(
                'RangeFragment',
                this.state.newFragmentName,
              )
            }>
            Range
          </button>
        </div>
      </div>
    );
  }
}

export default ObservationBuilder;
