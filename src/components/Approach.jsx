import React from 'react'

import ApproachProperty from '../containers/Property'
import AddPropertyButton from '../containers/AddPropertyButton'

import './styles/approach.css'

export default class Approach extends React.Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        index: React.PropTypes.number,
        metaCollection: React.PropTypes.array,
        properties: React.PropTypes.array,
    }

    // handleAddProperty(code) {
    //     let properties = this.state.properties
    //     if (properties.find(x => x.code == code)) {
    //         return 'Already had property <' + this.props.meta.find(x => x.code == code).name + '>.'
    //     }
    //     properties.push({code: code, value: null})
    //     this.setState({properties: properties})
    //     return ''
    // }

    render() {
        let propertyComponents = this.props.properties.map((property, index) => {
            return (
                <ApproachProperty
                    key={index}
                    index={index}
                    approachIndex={this.props.index}
                />
            )
        })

        return (
            <div className="approach">
                {propertyComponents}
                <AddPropertyButton targetApproachIndex={this.props.index} />
            </div>
        )
    }
}
