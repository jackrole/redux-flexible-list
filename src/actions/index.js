import {ADD_DETAIL, MOD_DETAIL, DEL_DETAIL} from '../constants/MetaActions'
import {
    ADD_PROPERTY, DEL_PROPERTY, SET_PROPERTY_VALUE, 
    SHOW_PROPERTY_LIST, HIDE_PROPERTY_LIST,
} from '../constants/ApproachActions'
import {SET_COMPONENT} from '../constatns/ComponentActions'

export const addMetaDetail = (code, name, description) => {
    return {
        type: ADD_DETAIL,
        code,
        name,
        description,
    }
}

export const modMetaDetail = (code, value, name, description) => {
    return {
        type: MOD_DETAIL,
        code,
        value,
        name,
        description,
    }
}

export const delMetaDetail = (code, value) => {
    return {
        type: DEL_DETAIL,
        code,
        value,
    }
}

// +++++++++++++++++++++++++++++++
//   Approach actions
// +++++++++++++++++++++++++++++++

export const addProperty = (approachIndex, propertyCode) => {
    return {
        type: ADD_PROPERTY,
        approachIndex,
        propertyCode,
    }
}

export const delProperty = (approachIndex, propertyIndex) => {
    return {
        type: DEL_PROPERTY,
        approachIndex,
        propertyIndex,
    }
}

export const setPropertyValue = (approachIndex, propertyIndex, value) => {
    return {
        type: SET_PROPERTY_VALUE,
        approachIndex,
        propertyIndex,
        value,
    }
}

export const showPropertyList = (targetApproachIndex, elements) => {
    return {
        type: SHOW_PROPERTY_LIST,
        targetApproachIndex,
        elements,
    }
}

export const hidePropertyList = () => {
    return {
        type: HIDE_PROPERTY_LIST,
    }
}


// +++++++++++++++++++++++++++++++
//   Component actions
// +++++++++++++++++++++++++++++++
export const setComponent = (componentName, componentData) => {
    return {
        type: SET_COMPONENT,
        componentName,
        componentData,
    }
}
