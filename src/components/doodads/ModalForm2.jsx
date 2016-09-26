import React from 'react'
import {findDOMNode} from 'react-dom'
import $ from 'jquery'

import warning from '../../utils/warning'
import {ensureNotNullString} from '../../utils/common'

import './styles/modal-form.css'

export default class ModalForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            closed: false,
        }

        this.handleClose = this.handleClose.bind(this)
        // this.handleClosed = this.handleClosed.bind(this)
    }

    static propTypes = {
        // By default, form will close itself when it is clicked.
        // 
        // If the inner content is clicked and want keeping
        // the form showing, call {stopPropagation} in inner
        // content's click event to stop the propagation.
        autoClose: React.PropTypes.bool,

        onClosing: React.PropTypes.func,
        onClosed: React.PropTypes.func,

        // This modal form can be used for multi scenes,
        // user can distinguish each scene by {modalType}.
        //
        // You can set {modalType} to 'DELETE_POST' to present
        // a form to confirm delete action, or set to 'CONFIRM_LOGOUT'
        // for a logout confirmation.
        //
        // If {modalType} sets to false values, this means form is hidden.
        //   * rendered to a <span /> element.
        modalType: React.PropTypes.string.isRequired,

        // {className} will output to class attritude of the root DOM element.
        className: React.PropTypes.string,

        children: React.PropTypes.any,
    }

    static defaultProps = {
        autoClose: true,
        modalType: '',  // this form is hidden while modalType is set to empty string. 
    }

    componentDidMount() {
        if (this.props.autoClose === true && this.props.modalType)
            $(document.body).css('overflow', 'hidden')
    }

    stopPropagation(event) {
        event.stopPropagation()
    }

    handleClose() {
        let selfDOM = findDOMNode(this.self)
        let {autoClose, onClosing, onClosed} = this.props
        let closeEvent = {domObj: selfDOM, reactObj: this}

        if (typeof onClosing === 'function')
            if (!onClosing(closeEvent)) return

        if (autoClose === true)
            $(selfDOM).find('.g_modal_wrap').fadeOut(250, function() {
                if (typeof onClosed === 'function')
                    onClosed(closeEvent)
                // else
                //     this.setState({closed: true})
                $(document.body).css('overflow', '')
            }.bind(this))
        else if (typeof onClosed === 'function') {
            onClosed(closeEvent)
        }
    }

    // // Default handler for {onClose} event if no handler specified in props.
    // // This will rerender current component to an empty span element. 
    // handleClosed() {
    //     this.setState({closed: true})
    // }

    render() {
        let {modalType, className, children} = this.props

        if (!modalType) {
            warning(false, 'No modalType specified, so the view of ModalForm will be rendered to an empty modal form.')
            return <span />
        }

        if (this.state.closed)
            return <span className="-closed-"/>

        return (
            <div
                ref={(c) => this.self = c}
                id={modalType}
                className={'g_modal ' + ensureNotNullString(className)}
                onClick={this.handleClose}
            >
                <div className="g_modal_cell">
                    <div ref={(c) => this.g_modal_wrap = c} className="g_modal_wrap" onClick={this.stopPropagation}>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}