import React, {PropTypes} from 'react'

import Grid from './Grid'

const DetailRow = ({rows, header}) => {
    return (
        <tr className="detail-row">
            <td colSpan="100%">
                <div>
                    <Grid rows={rows} header={header} />
                </div>
            </td>
        </tr>
    )
}

DetailRow.propTypes = {
    rows: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.string
        )
    ),
    header: PropTypes.arrayOf(
        PropTypes.string
    ),
}

export default DetailRow