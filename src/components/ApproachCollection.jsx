import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import Approach from '../containers/Approach'
import ApproachAppStateView from './ApproachAppStateView'
import PropertyList from '../containers/PropertyList'

import approachApp from '../reducers'

export default class ApproachCollection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            meta: null,
            approaches: null,
            error: null,
        }

        this.handleRefresh = this.handleRefresh.bind(this)
    }

    static propTypes = {
        promise: React.PropTypes.any,
        meta: React.PropTypes.any,
        propertyNullable: React.PropTypes.bool,
    }

    static defaultProps = {
        propertyNullable: true,  // Property can be left unselected or not.
    }

    handleRefresh() {
        this.setState({meta: this.state.meta})
    }

    // Get json data through web api, otherwise use the test data.
    componentDidMount() {
        this.props.promise.then(
            value => this.setState({loading: false, meta: value.meta, approaches: value.elements}),
            // error => this.setState({loading: false, error: error, meta: meta, approaches: approaches})
            error => {
                this.store = createStore(approachApp)
                this.setState({
                    loading: false, 
                    error: error, 
                    meta: this.store.getState().metaCollection, 
                    approaches: this.store.getState().approaches
                })
            }
        )
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }

        let approachComponents = this.state.approaches.map((approach, index) => {
            return (
                <Approach key={index} index={index} />
            )
        })

        return (
            <Provider store={this.store}>
                <div>
                    <ApproachAppStateView />
                    {approachComponents}
                    <PropertyList />
                </div>
            </Provider>
        )
    }
}