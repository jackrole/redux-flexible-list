import {SET_COMPONENT} from '../constatns/ComponentActions'

const components = (state, action) => {
    switch (action.type) {
    case SET_COMPONENT:
        return {
            componentName: action.componentName,
            componentData: action.componentData,
        }
    default:
        return state;
    }
}
