import React, {PropTypes} from 'react'

const Head = ({cells, cascadable, preExpander}) => {
    var cellElement = cells.map((cell, index) => {
        return <th key={index}>{cell}</th>
    })

    if (cascadable === true)
        if (preExpander)
            cellElement.unshift(<th key={cellElement.length} className="expander" />)            
        else
            cellElement.push(<th key={cellElement.length} className="expander" />)

    return <tr>{cellElement}</tr>
}

Head.propTypes = {
    cells: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    cascadable: PropTypes.bool,
    preExpander: PropTypes.bool,
}

export default Head