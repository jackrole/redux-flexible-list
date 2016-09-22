import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery'

import ApproachCollection from './components/ApproachCollection'

import {Grid} from './components/CascadeGrid'
import {default as default_table} from './tests/cascade-data'

function RenderApproachCollection() {
    ReactDom.render(
        <div>
            <ApproachCollection promise={$.getJSON('/taxapproach/')} />
        </div>,
        document.getElementById('example')
    )
}

function RenderCascadeGrid(table) {
    if (!table) table = default_table
    ReactDom.render(
        <div>
            <Grid rows={table.rows} header={table.header} />
        </div>,
        document.getElementById('example')
    )
}

window.RenderApproachCollection = RenderApproachCollection
window.RenderCascadeGrid = RenderCascadeGrid

// // ? What is the principle of the usage of module.hot.
// if (module.hot) {
//     module.hot.accept()
// }