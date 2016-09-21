import {PropTypes} from 'react'
import {connect} from 'react-redux'

import {default as Presentation} from '../components/Approach'

const mapStateToProps = (state, ownProps) => {
    return {
        index: ownProps.index,
        properties: state.approaches[ownProps.index],
    }
}

const Approach = connect(
    mapStateToProps,
)(Presentation)

Approach.propTypes = {
    index: PropTypes.number.isRequired,
}

export default Approach
