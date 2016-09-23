import $ from 'jquery'

import {ADD_DETAIL, MOD_DETAIL, DEL_DETAIL} from '../constants/MetaActions'
import {metaCollection as data} from '../tests/approach-data'

const details = (state=[], action) => {
    let detail
    let index

    switch (action.type) {
    case ADD_DETAIL:
        return [
            ...state,
            {
                value: state.length,
                name: action.name,
                description: action.description,
            },
        ]
    
    case MOD_DETAIL:
        detail = state.find(d => d.value === action.value)
        detail.name = action.name
        detail.description = action.description
        return $.extend(true, [], state)

    case DEL_DETAIL:
        detail = state.find(d => d.value === action.value)
        index = state.indexOf(detail)
        if (index !== -1) {
            state.splice(index, 1)
        }
        return state

    default:
        return state
    }
}

const metaCollection = (state=data, action) => {
    let meta
    state = $.extend(true, [], state)

    switch (action.type) {
    case ADD_DETAIL:
        meta = state.find(m => m.code === action.code)
        meta.details = details(meta.details, action)
        return state

    case MOD_DETAIL:
        meta = state.find(m => m.code === action.code)
        meta.details = details(meta.details, action)
        return state

    case DEL_DETAIL:
        meta = state.find(m => m.code === action.code)
        meta.details = details(meta.details, action)
        meta.details.forEach((d, i) => d.value = i)
        return state

    default:
        return state
    }
}

export default metaCollection
