import React, {PropTypes} from 'react'

import ApproachCollection from './components/ApproachCollection'
import PopupSelector from './components/doodads/PopupSelector'
import {PromptForm} from './components/doodads'
import {Grid, PopupGrid} from './components/CascadeGrid'

const ComponentDispatcher = ({name, data}) => {
    switch (name) {

    }
}

ComponentDispatcher.propTypes = {
    name: PropTypes.string,
    data: PropTypes.any,
}

export default ComponentDispatcher
