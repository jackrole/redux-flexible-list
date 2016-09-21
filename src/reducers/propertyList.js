import {SHOW_PROPERTY_LIST, HIDE_PROPERTY_LIST} from '../constants/ApproachActions'

const emptyList = {
    modalType: '',
    targetApproachIndex: undefined,
    elements: [],
}

const emptyList2 = {
    modalType: 'SHOW_PROPERTY_LIST',
    targetApproachIndex: 0,
    elements: [
        {code: 'Chinese', name: '中文', },
        {code: 'English', name: 'English', },
        {code: 'Japanese', name: '日本語', },
    ],
}

const propertyList = (state=emptyList, action) => {
    switch (action.type) {
    case SHOW_PROPERTY_LIST:
        return {
            modalType: action.type,
            targetApproachIndex: action.targetApproachIndex,
            elements: action.elements,
        }
    case HIDE_PROPERTY_LIST:
        return emptyList
    default:
        return state
    }
}

export default propertyList
