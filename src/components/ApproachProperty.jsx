import React, {PropTypes} from 'react'
import $ from 'jquery'

import ApproachPropertyDetail from '../containers/PropertyDetail'

import {NavbarToggleButton, AlertInfo, AlertDanger} from './doodads'

import './styles/approach-property.css'

class ApproachProperty extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bodyHidden: true,
        }

        this.handleDetailClick = this.handleDetailClick.bind(this)
        this.toggleDetails = this.toggleDetails.bind(this)
    }

    static propTypes = {
        meta: PropTypes.object.isRequired,
        valueList: PropTypes.array,
        onDetailClick: PropTypes.func,
    }

    static defaultProps = {}

    static noDetailSelectedMessage = <AlertInfo message="No item selected." />
    static outOfRangeMessage = <AlertDanger message="The range of value is out of the available detail items." />

    handleDetailClick(detailValue) {
        let {onDetailClick} = this.props
        if (onDetailClick) onDetailClick(detailValue)
    }

    toggleDetails() {
        let $body = $(this.refBody)
        $body.slideToggle(150, () => {
            this.setState({bodyHidden: $body.css('display') == 'none' ? true : false})
        })
    }

    render() {
        let hasSelectedDetail = false
        let valueList = $.extend([], this.props.valueList)

        let detailItems = this.props.meta.details.map(detail => {
            let indexOfValue = valueList.indexOf(detail.value)
            if (indexOfValue != -1) {
                valueList.splice(indexOfValue, 1)
                if (!hasSelectedDetail) hasSelectedDetail = true
            }
            return (
                <ApproachPropertyDetail
                    key={detail.value}
                    code={this.props.meta.code}
                    value={detail.value}
                    selected={indexOfValue != -1}
                    onClick={this.handleDetailClick}
                />
            )
        })

        let panelType = valueList.length > 0
            ? 'panel-danger'
            : !hasSelectedDetail
                ? 'panel-info'
                : 'panel-default'

        let navbarType = valueList.length > 0
            ? 'navbar-danger'
            : !hasSelectedDetail
                ? 'navbar-info'
                : 'navbar-default'

        return (
            <div className={'approach-property panel ' + panelType}>
                <div ref={(ref) => this.refHeading = ref} className="panel-heading">
                    <nav className={'navbar ' + navbarType}>
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <span className="navbar-brand">{this.props.meta.name}</span>
                                <NavbarToggleButton text="Toggle navigation" onClick={this.toggleDetails} />
                            </div>
                            {/**<div className="collapse navbar-collapse" /> */}
                        </div>
                    </nav>
                </div>
                <div ref={(ref) => this.refBody = ref} className="panel-body">
                    {valueList.length == 0 ? '' : ApproachProperty.outOfRangeMessage}
                    {hasSelectedDetail ? '' : ApproachProperty.noDetailSelectedMessage}
                    <ul className="list-groups">
                        {detailItems}
                        <ApproachPropertyDetail code={this.props.meta.code} />
                    </ul>
                </div>
            </div>
        )
    }
}

export default ApproachProperty
