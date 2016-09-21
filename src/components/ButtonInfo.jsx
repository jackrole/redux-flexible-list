import React, {PropTypes} from 'react'

const ButtonInfo = ({value, onClick}) => {
    return (
        <input type="button" className="btn btn-info" onClick={onClick} value={value} />
    )
}

ButtonInfo.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ButtonInfo
