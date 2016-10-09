import React, {PropTypes} from 'react'
import ModalForm from './ModalForm'

import {AlertDanger} from './index'

import './styles/popup-selector.css'

export default class PopupSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
        }

        this.handleItemClick = this.handleItemClick.bind(this)
    }
    
    static propTypes = {
        modalType: PropTypes.string.isRequired,
        title: PropTypes.string,
        elements: PropTypes.array.isRequired,
        onItemClick: PropTypes.func,
        onClosing: PropTypes.func,
        onClosed: PropTypes.func,
    }

    static defaultProps = {
        title: 'Select',
    }

    handleItemClick(code) {
        return () => {
            let {onItemClick, onClosing, onClosed} = this.props
            if (onItemClick != null) {
                let result = onItemClick(code)
                if (result && result.message) {
                    this.setState({ message: result.message })
                }
                else {
                    this.setState({ message: '' })
                    if (typeof onClosing === 'function')
                        onClosing()
                    if (typeof onClosed === 'function')
                        onClosed()
                }
            }
        }
    }

    render () {
        var propertyItems = this.props.elements.sort((x, y) => x.code > y.code).map(x => {
            return <li className="list-group-item clearfix" key={x.code} onClick={this.handleItemClick(x.code)}>{x.name}</li>
        })

        return (
            <ModalForm
                modalType={this.props.modalType}
                className="selector-modal"
                onClosing={this.props.onClosing}
                onClosed={this.props.onClosed}
            >
                <div id="pop-selector" className="panel panel-primary" onClick={this.stopPropagation} >
                    <div className="panel-heading">{this.props.title}</div>
                    <div className="panel-body">
                        {this.state.message ? <AlertDanger message={this.state.message} /> : ''}
                        <ul className="list-groups">
                            {propertyItems}
                        </ul>
                    </div>
                </div>
            </ModalForm>
        )
    }
}