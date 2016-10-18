import React, {PropTypes} from 'react'
import ReactDom from 'react-dom'

import $ from 'jquery'

import ApproachCollection from './components/ApproachCollection'
import PopupSelector from './components/doodads/PopupSelector'
import {PromptForm} from './components/doodads'
import {Grid, PopupGrid} from './components/CascadeGrid'

const renderApproachCollection = () => {
    ReactDom.render(
        <ApproachCollection ref={(ref) => this.approachCollection = ref} promise={$.getJSON('/taxapproach/')} />,
        document.getElementById('example')
    )
}

const renderCascadeGrid = (table) => {
    ReactDom.render(
        <Grid
            ref={(ref) => this.cascadeGrid = ref}
            rows={table.rows}
            header={table.header}
            preExpander={table.preExpander}
            widgets={table.widgets}
        />,
        document.getElementById('example')
    )
}

const renderPopupCascadeGrid = (table) => {
    ReactDom.render(
        <PopupGrid
            ref={(ref) => this.popupCascadeGrid = ref}
            rows={table.rows}
            header={table.header}
            title={table.title}
            preExpander={table.preExpander}
            widgets={table.widgets}
        />,
        document.getElementById('example')
    )
}

const renderPopupSelector = (data) => {
    ReactDom.render(
        <PopupSelector ref={(ref) => this.popupSelector = ref} {...data} />,
        document.getElementById('example')
    )
}

const renderPromptForm = (title, prompt, onAccept, onDeny) => {
    ReactDom.render(
        <PromptForm title={title} prompt={prompt} onAccept={onAccept} onDeny={onDeny} />,
        document.getElementById('example')
    )
}

const renderEmpty = () => {
    ReactDom.render(
        <div/>,
        document.getElementById('example')
    )
}

const Dispatcher = ({name, data}) => {
    switch (name) {
    case 'approach':
        return renderApproachCollection()
    case 'selector':
        return renderPopupSelector(data)
    case 'grid':
        return renderCascadeGrid(data)
    case 'popupgrid':
        return renderPopupCascadeGrid(data)
    case 'prompt':
        return renderPromptForm(data)
    default:
        return renderEmpty()
    }
}

Dispatcher.propTypes = {
    name: PropTypes.string,
    data: PropTypes.any,
}

export default Dispatcher
