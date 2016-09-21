import React, {PropTypes} from 'react'

const Row = ({cells}) => {
    var cellElement = cells.map((cell, index) => {
        return <td key={index}>{cell}</td>
    })

    return <tr>{cellElement}</tr>
}

Row.propTypes = {
    cells: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
}

export default Row