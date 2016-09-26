import React, {PropTypes} from 'react'

import ModalForm from '../doodads/ModalForm2'
import Grid from './Grid'

const PopupGrid = ({rows, header, preExpander, onClosed}) => {
    return (
        <ModalForm modalType="popupgrid" onClosed={onClosed}>
            <div className="cascadegrid-wrapper">
                <div className="scroller">
                    <Grid rows={rows} header={header} preExpander={preExpander} />
                </div>
            </div>
        </ModalForm>
    )
}

PopupGrid.propTypes = {
    rows: PropTypes.array,
    header: PropTypes.array,
    preExpander: PropTypes.bool,
    onClosed: PropTypes.func,
}

export default PopupGrid