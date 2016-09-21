import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {addProperty, hidePropertyList} from '../actions'
import {default as Presentation} from '../components/doodad/PopupSelector'

const mapStateToProps = (state) => {
    return {
        modalType: state.propertyList.modalType,
        targetApproachIndex: state.propertyList.targetApproachIndex,
        elements: state.propertyList.elements,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProperty: bindActionCreators(addProperty, dispatch),
        hidePropertyList: bindActionCreators(hidePropertyList, dispatch),
    }
}

const mergeProps = (stateProps, dispatchProps) => {
    return {
        modalType: stateProps.modalType,
        title: 'Properties',
        elements: stateProps.elements,
        onItemClick: propertyCode => {
            dispatchProps.addProperty(stateProps.targetApproachIndex, propertyCode)
            return {}
        },
        onClosing: () => dispatchProps.hidePropertyList(),
    }
}

const ApproachPropertyList = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
)(Presentation)

export default ApproachPropertyList
