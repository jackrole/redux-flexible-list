import React, {PropTypes} from 'react'

import ModalForm from './ModalForm'

const TitledModalForm = ({modalType, title, onClosed, children}) => {
    return (
        <ModalForm modalType={modalType} onClosed={onClosed} >
            <div className="panel panel-default" >
                <div className="panel-heading" >{title}</div>
                <div className="panel-body" >
                    {children}
                </div>
            </div>
        </ModalForm>
    )
}

TitledModalForm.propTypes = {
    modalType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClosed: PropTypes.func,
    children: PropTypes.element,
}

export default TitledModalForm
