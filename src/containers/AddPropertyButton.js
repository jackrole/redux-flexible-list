import {PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import ButtonInfo from '../components/ButtonInfo'
import {showPropertyList} from '../actions'

const mapStateToProps = (state) => {
    return {
        value: 'Add Property',
        elements: state.metaCollection,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showPropertyList: bindActionCreators(showPropertyList, dispatch),
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        value: stateProps.value,
        onClick: () => dispatchProps.showPropertyList(ownProps.targetApproachIndex, stateProps.elements)
    }
}

const AddPropertyButton = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
)(ButtonInfo)

AddPropertyButton.propTypes = {
    targetApproachIndex: PropTypes.number.isRequired,
}

export default AddPropertyButton
