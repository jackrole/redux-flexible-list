import React, {PropTypes} from 'react'

import TitledModalForm from './TitledModalForm'

const PromptForm = ({title, prompt, onAccept, onDeny, acceptBtnName, denyBtnName}) => {
    let
        controlArea,
        handleAccept = function () {
            if (typeof onAccept === 'function') {
                onAccept()
            }
        },
        handleDeny = function () {
            if (typeof onDeny === 'function') {
                onDeny()
            }
        }

    if (typeof onDeny === 'function') {
        controlArea = (
            <div>
                <input type="button" value="{acceptBtnName}" onClick={handleAccept} />
                <input type="button" value="{denyBtnName}" onClick={handleDeny} />
            </div>
        )
    } else {
        controlArea = (
            <div>
                <input type="button" value="{acceptBtnName}" onClick={handleAccept} />
            </div>
        )
    }

    return (
        <TitledModalForm modalType="prompt-form" title={title} >
            <div>{prompt}</div>
            {controlArea}
        </TitledModalForm>
    )
}

PromptForm.propTypes = {
    title: PropTypes.string,
    prompt: PropTypes.string.isRequired,
    onAccept: PropTypes.func,
    onDeny: PropTypes.func,
    acceptBtnName: PropTypes.string,
    denyBtnName: PropTypes.string,
}

PromptForm.defaultProps = {
    acceptBtnName: 'OK',
    denyBtnName: 'Cancel',
}

export default PromptForm
