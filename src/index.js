import React from 'react'
import ReactDom, {unmountComponentAtNode} from 'react-dom'
import $ from 'jquery'

import PopupSelector from './components/doodads/PopupSelector'
import {PromptForm} from './components/doodads'

import ApproachCollection from './components/ApproachCollection'

import {Grid, PopupGrid} from './components/CascadeGrid'
import {default as default_table} from './tests/cascade-data'

function RenderApproachCollection() {
    ReactDom.render(
        <ApproachCollection ref={(ref) => this.approachCollection = ref} promise={$.getJSON('/taxapproach/')} />,
        document.getElementById('example')
    )
}

function RenderCascadeGrid(table) {
    if (!table) table = default_table
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

function RenderPopupCascadeGrid(table) {
    if (!table) table = default_table
    ReactDom.render(
        <PopupGrid
            ref={(ref) => this.popupCascadeGrid = ref}
            rows={table.rows}
            header={table.header}
            title={table.title}
            preExpander={table.preExpander}
            widgets={table.widgets}
            onClosed={DisposeReact}
        />,
        document.getElementById('example')
    )
}

function RenderPopupSelector(data) {
    ReactDom.render(
        <PopupSelector ref={(ref) => this.popupSelector = ref} {...data} onClosed={DisposeReact} />,
        document.getElementById('example')
    )
}

function RenderPromptForm(title, prompt, onAccept, onDeny) {
    ReactDom.render(
        <PromptForm title={title} prompt={prompt} onAccept={onAccept} onDeny={onDeny} onClosed={DisposeReact} />,
        document.getElementById('example')
    )
}

function DisposeReact() {
    unmountComponentAtNode(document.getElementById('example'))
}

const popupHelper = {
    DisposeReact,
    RenderApproachCollection,
    RenderCascadeGrid,
    RenderPopupCascadeGrid,
    RenderPopupSelector,
    RenderPromptForm,
}

window.popupHelper = popupHelper
if (!window.hasOwnProperty('ph'))
    window.ph = popupHelper

// // ? What is the principle of the usage of module.hot.
// if (module.hot) {
//     module.hot.accept()
// }