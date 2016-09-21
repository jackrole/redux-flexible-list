import {combineReducers} from 'redux'
import approaches from './approaches'
import metaCollection from './metaCollection'
import propertyList from './propertyList'

const approachApp = combineReducers({
    approaches,
    metaCollection,
    propertyList,
})

export default approachApp
