import {SET_COMPONENT} from '../constants/DispatcherActions'

const dispatcher = (state, action) => {
    switch (action.type) {
    case SET_COMPONENT:
        return {
            componentName: action.componentName,
            componentData: action.componentData,
        }
    default:
        return {
            componentName: '',
            componentData: null,
        }
    }
}

export default dispatcher
