import React, {PropTypes} from 'react'

import Grid from './Grid'

const DetailRow = ({rows, header, preExpander}) => {
    return (
        <tr className="detail-row">
            <td colSpan="100%">
                <div>
                    <Grid rows={rows} header={header} preExpander={preExpander} />
                </div>
            </td>
        </tr>
    )
}

DetailRow.propTypes = {
    rows: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object,
        ])
    ),
    header: PropTypes.arrayOf(
        PropTypes.string
    ),
    preExpander: PropTypes.bool,
}

export default DetailRow