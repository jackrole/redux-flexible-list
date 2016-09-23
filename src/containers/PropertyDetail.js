import {PropTypes} from 'react'
import {connect} from 'react-redux'

import {addMetaDetail, modMetaDetail, delMetaDetail} from '../actions'
import {default as Presentation} from '../components/ApproachPropertyDetail'

const mapStateToProps = (state, ownProps) => {
    if (ownProps.value == null) {
        return {
            value: undefined,
            name: '',
            description: '',
            onClick: ownProps.onClick,
        }
    }

    let meta = state.metaCollection.find(meta => meta.code === ownProps.code)
    let detail = meta.details.find(dtl => dtl.value === ownProps.value)
    return {
        value: detail.value,
        name: detail.name,
        description: detail.description,
        selected: ownProps.selected,
        onClick: ownProps.onClick,
    }
}

const handleSave = (dispatch, code) => {
    return ({value, name, description}) => {
        if (value === undefined) {
            dispatch(addMetaDetail(code, name, description))
            return true
        }
        else {
            dispatch(modMetaDetail(code, value, name, description))
            return true
        }
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSave: handleSave(dispatch, ownProps.code),
        onDelete: (value) => dispatch(delMetaDetail(ownProps.code, value)),
    }
}

const ApproachPropertyDetail = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Presentation)

ApproachPropertyDetail.propTypes = {
    code: PropTypes.string.isRequired,
    value: PropTypes.number,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
}

ApproachPropertyDetail.defaultProps = {
    value: undefined,
}

export default ApproachPropertyDetail
