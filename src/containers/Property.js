import {PropTypes} from 'react'
import {connect} from 'react-redux'

import {covertIntToBitArray, convertBitArrayToInt} from '../utils/common'

import {setPropertyValue} from '../actions'
import {default as Presentation} from '../components/ApproachProperty'

const getValueList = (value, multiSelect) => {
    if (value == null)
        return []
    else if (multiSelect)
        return covertIntToBitArray(value)
    else
        return [value]
}

const mapStateToProps = (state, ownProps) => {
    let {approachIndex, index} = ownProps
    let property = state.approaches[approachIndex][index]
    let {code, value} = property
    let meta = state.metaCollection.find(meta => meta.code === code)
    // let {value} = property
    // let meta = ownProps.meta
    let multiSelect = meta.multiSelect
    return {
        meta: meta,
        valueList: getValueList(value, multiSelect),
        multiSelect,
        approachIndex,
        index,
    }
}

const handleDetailClick = dispatch => {
    return (approachIndex, index, multiSelect, prevValueList) => {
        return detailValue => {
            let value
            let position = prevValueList.indexOf(detailValue)

            if (multiSelect) {
                if (position === -1) {
                    value = convertBitArrayToInt([...prevValueList, detailValue])
                } else {
                    prevValueList.splice(position, 1)
                    value = convertBitArrayToInt(prevValueList)
                }
            } else {
                if (position === -1) {
                    value = detailValue
                } else {
                    value = null
                }
            }

            dispatch(setPropertyValue(approachIndex, index, value))
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDetailClick: handleDetailClick(dispatch),
    }
}

const mergeProps = (stateProps, dispatchProps) => {
    return {
        meta: stateProps.meta,
        valueList: stateProps.valueList,
        onDetailClick: dispatchProps.handleDetailClick(
            stateProps.approachIndex,
            stateProps.index,
            stateProps.multiSelect,
            stateProps.valueList,
        ),
    }
}

const ApproachProperty = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
)(Presentation)

ApproachProperty.propTypes = {
    approachIndex: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
}

export default ApproachProperty
