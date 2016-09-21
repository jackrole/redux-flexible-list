import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery'

import ApproachCollection from './components/ApproachCollection'

import {CascadeGrid, Grid} from './components/CascadeGrid'
import records from './tests/cascade-data'

// ReactDom.render(
//     <div>
//         <ApproachCollection promise={$.getJSON('/taxapproach/')} />
//     </div>,
//     document.getElementById('example')
// )

ReactDom.render(
    <div>
        <CascadeGrid primary={records[0].cells} details={records[0].details} />
    </div>,
    document.getElementById('example')
)

// ? What is the principle of the usage of module.hot.
if (module.hot) {
    module.hot.accept()
}