import React, {PropTypes} from 'react'

import TitledModalForm from './TitledModalForm'

const PromptForm = ({title, prompt, onAccept, onDeny,  onClosed, acceptBtnName, denyBtnName}) => {
    let
        controlArea,
        handleAccept = function () {
            if (typeof onClosed === 'function') {
                onClosed()
            }
            if (typeof onAccept === 'function') {
                onAccept()
            }
        },
        handleDeny = function () {
            if (typeof onClosed === 'function') {
                onClosed()
            }
            if (typeof onDeny === 'function') {
                onDeny()
            }
        }

    if (typeof onDeny === 'function') {
        controlArea = (
            <div>
                <input type="button" value={acceptBtnName} onClick={handleAccept} />
                <input type="button" value={denyBtnName} onClick={handleDeny} />
            </div>
        )
    } else {
        controlArea = (
            <div>
                <input type="button" value={acceptBtnName} onClick={handleAccept} />
            </div>
        )
    }

    return (
        <TitledModalForm modalType="prompt-form" title={title} onClosed={onClosed} >
            <div>
                <div>{prompt}</div>
                {controlArea}
            </div>
        </TitledModalForm>
    )
}

PromptForm.propTypes = {
    title: PropTypes.string,
    prompt: PropTypes.string.isRequired,
    onAccept: PropTypes.func,
    onDeny: PropTypes.func,
    onClosed: PropTypes.func,
    acceptBtnName: PropTypes.string,
    denyBtnName: PropTypes.string,
}

PromptForm.defaultProps = {
    acceptBtnName: 'OK',
    denyBtnName: 'Cancel',
}

export default PromptForm
