import React, {PropTypes} from 'react'

import ModalForm from '../doodads/ModalForm2'
import Grid from './Grid'

import './styles/popup-grid.css'

const PopupGrid = ({rows, header, preExpander, widgets, onClosed}) => {
    return (
        <ModalForm modalType="popupgrid" onClosed={onClosed}>
            <div className="cascadegrid-wrapper">
                <div className="scroller">
                    <Grid rows={rows} header={header} preExpander={preExpander} widgets={widgets} />
                </div>
            </div>
        </ModalForm>
    )
}

PopupGrid.propTypes = {
    rows: PropTypes.array,
    header: PropTypes.array,
    preExpander: PropTypes.bool,
    widgets: PropTypes.shape({
        class: PropTypes.string,
        columns: PropTypes.object,
    }),
    onClosed: PropTypes.func,
}

export default PopupGrid