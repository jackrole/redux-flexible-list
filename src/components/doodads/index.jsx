import React, {PropTypes} from 'react'

export const AlertInfo = ({message}) => {
    return (
        <div className="alert alert-info" role="alert">
            {message}
        </div>
    )
}

export const AlertDanger = ({message}) => {
    return (
        <div className="alert alert-danger" role="alert">
            {message}
        </div>
    )
}

export const NavbarToggleButton = ({text, onClick}) => {
    return (
        <button type="button" className="navbar-toggle" onClick={onClick}>
            <span className="sr-only">{text}</span>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
        </button>
    )
}

AlertInfo.propTypes = {
    message: PropTypes.string.isRequired,
}

AlertDanger.propTypes = {
    message: PropTypes.string.isRequired,
}

NavbarToggleButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}
