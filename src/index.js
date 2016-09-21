import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery'

import ApproachCollection from './components/ApproachCollection'

ReactDom.render(
    <div>
        <ApproachCollection promise={$.getJSON('/taxapproach/')} />
    </div>,
    document.getElementById('example')
)

// ? What is the principle of the usage of module.hot.
if (module.hot) {
    module.hot.accept()
}