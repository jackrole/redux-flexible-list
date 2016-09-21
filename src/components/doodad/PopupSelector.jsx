import React from 'react'
import ModalForm from './ModalForm'

import {AlertDanger} from './index'

import './styles/popup-selector.css'

export default class PopupSelector extends ModalForm {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
        }

        this.handleItemClick = this.handleItemClick.bind(this)
    }
    
    static propTypes = {
        title: React.PropTypes.string,
        elements: React.PropTypes.array.isRequired,
        onItemClick: React.PropTypes.func,
    }

    static defaultProps = {
        title: 'Select',
    }

    handleItemClick(code) {
        return () => {
            let {onItemClick} = this.props
            if (onItemClick != null) {
                let result = onItemClick(code)
                if (result.message) {
                    this.setState({ message: result.message })
                }
                else {
                    this.setState({ message: '' })
                    this.handleClose()
                }
            }
        }
    }

    renderContent() {
        var propertyItems = this.props.elements.sort((x, y) => x.code > y.code).map(x => {
            return <li className="list-group-item clearfix" key={x.code} onClick={this.handleItemClick(x.code)}>{x.name}</li>
        })

        return (
            <div id="pop-selector" className="panel panel-primary" onClick={this.stopPropagation} >
                <div className="panel-heading">{this.props.title}</div>
                <div className="panel-body">
                    {this.state.message ? <AlertDanger message={this.state.message} /> : ''}
                    <ul className="list-groups">
                        {propertyItems}
                    </ul>
                </div>
            </div>
        )
    }
}