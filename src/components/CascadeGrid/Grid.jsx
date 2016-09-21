import React, {PropTypes} from 'react'

import Row from './Row'

const Grid = ({rows}) => {
    var rowElements = rows.map((row, index) => {
        return <Row key={index} cells={row} />
    })

    return (
        <table>
        <tbody>{rowElements}</tbody>
        </table>
    )
}

Grid.propTypes = {
    rows: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.string
        )
    )
}

export default Grid