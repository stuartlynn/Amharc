import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'redux';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

class ObservationTemplateList extends Component {
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
        {this.props.observationTemplates.map(obs => (
          <div>
            <Link to={`/observationRunnner/${obs.id}`}>
              <Typography component="h2" variant="headline">
                {obs.name}
              </Typography>
            </Link>
            <Typography compontent="p">{obs.description}</Typography>
          </div>
        ))}
      </div>
    );
  }
}

export default ObservationTemplateList;
