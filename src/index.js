import React from 'react'
import ReactDom, {unmountComponentAtNode} from 'react-dom'
import $ from 'jquery'

import ApproachCollection from './components/ApproachCollection'

import {Grid, PopupGrid} from './components/CascadeGrid'
import {default as default_table} from './tests/cascade-data'

function RenderApproachCollection() {
    ReactDom.render(
        <ApproachCollection promise={$.getJSON('/taxapproach/')} />,
        document.getElementById('example')
    )
}

function RenderCascadeGrid(table) {
    if (!table) table = default_table
    ReactDom.render(
        <Grid rows={table.rows} header={table.header} />,
        document.getElementById('example')
    )
}

function RenderPopupCascadeGrid(table) {
    if (!table) table = default_table
    ReactDom.render(
        <PopupGrid rows={table.rows} header={table.header} onClosed={DisposeReact} />,
        document.getElementById('example')
    )
}

function DisposeReact() {
    unmountComponentAtNode(document.getElementById('example'))
}

window.DisposeReact = DisposeReact
window.RenderApproachCollection = RenderApproachCollection
window.RenderCascadeGrid = RenderCascadeGrid
window.RenderPopupCascadeGrid = RenderPopupCascadeGrid

const popupHelper = {
    DisposeReact,
    RenderApproachCollection,
    RenderCascadeGrid,
    RenderPopupCascadeGrid,
}

window.popupHelper = popupHelper

// // ? What is the principle of the usage of module.hot.
// if (module.hot) {
//     module.hot.accept()
// }