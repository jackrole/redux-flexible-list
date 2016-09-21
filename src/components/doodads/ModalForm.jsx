import React from 'react'
import $ from 'jquery'

import './styles/modal-form.css'

export default class ModalForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleClose = this.handleClose.bind(this)
    }

    static propTypes = {
        // By default, form will close itself when it is clicked.
        // 
        // If the inner content is clicked and want keeping
        // the form showing, call {stopPropagation} in inner
        // content's click event to stop the propagation.
        autoClose: React.PropTypes.bool,

        onClosing: React.PropTypes.func,

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
    }

    static defaultProps = {
        autoClose: true,
        modalType: '',  // this form is hidden while modalType is set to empty string. 
    }

    componentDidMount() {
        if (this.props.autoClose == true && this.props.modalType)
            $(document.body).css('overflow', 'hidden')
    }

    stopPropagation(event) {
        event.stopPropagation()
    }

    // handleClose() {
    //     var $self = $(this.self)
    //     if (this.props.autoClose == true)
    //         $self.find('.g_modal_wrap').fadeOut(250, function() {
    //             $self.remove()
    //             $(document.body).css('overflow', '')
    //         })
    //     if (typeof this.props.onClosing == 'function')
    //         this.props.onClosing({
    //             domObj: $self,
    //             reactObj: this,
    //         })
    // }

    handleClose() {
        let $self = $('.g_modal')
        $self.find('.g_modal_wrap').fadeOut(250, function() {
            $self.remove()
            $(document.body).css('overflow', '')
        })
    }

    render() {
        if (!this.props.modalType) {
            return <span />
        }

        return (
            <div ref={(c) => this.self = c} className="g_modal" onClick={this.handleClose}>
                <div className="g_modal_cell">
                    <div ref={(c) => this.g_modal_wrap = c} className="g_modal_wrap">
                        {this.renderContent ? this.renderContent() : null}
                    </div>
                </div>
            </div>
        )
    }
}