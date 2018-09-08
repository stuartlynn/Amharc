import PropTypes from 'prop-types'

export default {
  frangmentID: PropTypes.string.isRequired,
  fragmentType: PropTypes.string.isRequired,
  onValueChanged: PropTypes.func.isRequired,
  collectionName: PropTypes.string.isRequired,
}

