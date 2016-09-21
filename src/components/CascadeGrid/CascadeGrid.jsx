import React, {PropTypes} from 'react'

import Grid from './Grid'

import {NavbarToggleButton} from '../doodads'

const CascadeGrid = ({primary, details}) => {
    return (
        <div className={'panel panel-info'}>
            <div ref={(ref) => this.refHeading = ref} className="panel-heading">
                <nav className={'navbar'}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <div className="navbar-brand"><Grid rows={primary} /></div>
                            <NavbarToggleButton text="Toggle navigation" onClick={null} />
                        </div>
                    </div>
                </nav>
            </div>
            <div ref={(ref) => this.refBody = ref} className="panel-body">
                <Grid rows={details} />
            </div>
        </div>
    )
}

CascadeGrid.propTypes = {
    primary: PropTypes.any,
    details: PropTypes.any,
}

export default CascadeGrid