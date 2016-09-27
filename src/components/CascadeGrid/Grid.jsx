import React, {PropTypes} from 'react'

import Head from './Head'
import Row from './Row'
import DetailRow from './DetailRow'

import warning from '../../utils/warning'

import './styles/grid.css'

const Grid = ({rows, header, preExpander}) => {
    let index = 0
    let rowElements = []

    let hasCascadeRow = rows.filter(row => !Array.isArray(row)).length > 0

    rows.forEach(row => {
        if (Array.isArray(row)) {
            rowElements.push(<Row key={index++} cells={row} cascaded={false} hasCascadedSibling={hasCascadeRow} preExpander={preExpander} />)
        } else {
            rowElements.push(<Row key={index++} cells={row.primary} cascaded={true} expanded={false} preExpander={preExpander} />)

            if (Array.isArray(row.details)) {
                rowElements.push(<DetailRow key={index++} rows={row.details} header={header} preExpander={preExpander} />)
            } else {
                // Here, {row.details} should be an object which contains header information itself.
                // A `rows` property of {row.details} should also be applied here.
                warning(row.details.rows !== undefined, 'Cannot find prop `rows` of `row.details`. Please check the original data.')
                rowElements.push(<DetailRow key={index++} rows={row.details.rows} header={row.details.header} preExpander={preExpander} />)
            }
        }
    })

    let headerElements = null

    if (header)
        headerElements = <thead><Head cells={header} cascadable={hasCascadeRow} preExpander={preExpander} /></thead>

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
    preExpander: PropTypes.bool,
}

export default Grid