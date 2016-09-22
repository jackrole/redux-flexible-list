import React, {PropTypes} from 'react'

import Head from './Head'
import Row from './Row'
import DetailRow from './DetailRow'

import './styles/cascadegrid.css'

const Grid = ({rows, header}) => {
    let index = 0
    let rowElements = []
    let cascadable = false

    rows.forEach(row => {
        if (Array.isArray(row)) {
            rowElements.push(<Row key={index++} cells={row} cascaded={false} />)
        } else {
            rowElements.push(<Row key={index++} cells={row.primary} cascaded={true} expanded={false} />)
            rowElements.push(<DetailRow key={index++} rows={row.details} header={header} />)
            cascadable = true
        }
    })

    let headerElements = null

    if (header)
        headerElements = <thead><Head cells={header} cascadable={cascadable} /></thead>

    return (
        <table className="cascadegrid bordered -single-head">
            {headerElements}
            <tbody>{rowElements}</tbody>
        </table>
    )
}

Grid.propTypes = {
    rows: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.string
            )
        ),
        PropTypes.arrayOf(
            PropTypes.objectOf({
                primary: PropTypes.array,
                details: PropTypes.arrayOf(
                    PropTypes.arrayOf(
                        PropTypes.string
                    )
                ),
            })
        ),
    ]),
    header: PropTypes.arrayOf(
        PropTypes.string
    ),
}

export default Grid