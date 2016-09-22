import React, {PropTypes} from 'react'

const Head = ({cells, cascadable}) => {
    var cellElement = cells.map((cell, index) => {
        return <th key={index}>{cell}</th>
    })

    if (cascadable === true)
        cellElement.push(<th key={cellElement.length} />)

    return <tr>{cellElement}</tr>
}

Head.propTypes = {
    cells: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    cascadable: PropTypes.bool,
}

export default Head