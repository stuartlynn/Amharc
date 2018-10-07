import PropTypes from 'prop-types'

export default {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
}

