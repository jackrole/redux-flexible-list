import React, {PropTypes} from 'react'

import Grid from './Grid'

import {NavbarToggleButton} from '../doodads'

import './styles/cascadegrid.css'

const CascadeGrid = ({primary, details}) => {
    return (
        <div className={'cascadegrid panel panel-info'}>
            <div ref={(ref) => this.refHeading = ref} className="panel-heading">
                <Grid rows={primary} cascadable={true} />
                <NavbarToggleButton text="Toggle navigation" onClick={null} />
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