import $ from 'jquery'

import {ADD_PROPERTY, DEL_PROPERTY, SET_PROPERTY_VALUE} from '../constants/ApproachActions'
import {approaches as data} from '../tests/approach-data'

const approaches = (state=data, action) => {
    state = $.extend(true, [], state)

    switch (action.type) {
    case ADD_PROPERTY:
        state[action.approachIndex].push({code: action.propertyCode, value: undefined})
        return state

    case DEL_PROPERTY:
        state[action.approachIndex].splice(action.propertyIndex, 1)
        return state

    case SET_PROPERTY_VALUE:
        state[action.approachIndex][action.propertyIndex].value = action.value
        return state

    default:
        return state
    }
}

export default approaches