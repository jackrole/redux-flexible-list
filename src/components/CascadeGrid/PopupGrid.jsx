import React, {PropTypes} from 'react'

import ModalForm from '../doodads/ModalForm'
import Grid from './Grid'

import './styles/popup-grid.css'

const PopupGrid = ({rows, header, title, preExpander, widgets, onClosed}) => {
    if (!title)
        return (
            <ModalForm modalType="popup-grid" onClosed={onClosed}>
                <div className="cascadegrid-wrapper">
                    <div className="scroller">
                        <Grid rows={rows} header={header} preExpander={preExpander} widgets={widgets} />
                    </div>
                </div>
            </ModalForm>
        )

    return (
        <ModalForm modalType="popup-grid" onClosed={onClosed}>
            <div className="panel panel-default">
                <div className="panel-heading">{title}</div>
                <div className="panel-body">
                    <div className="cascadegrid-wrapper">
                        <div className="scroller">
                            <Grid rows={rows} header={header} preExpander={preExpander} widgets={widgets} />
                        </div>
                    </div>
                </div>
            </div>
        </ModalForm>
    )
}

PopupGrid.propTypes = {
    rows: PropTypes.array,
    header: PropTypes.array,
    title: PropTypes.string,
    preExpander: PropTypes.bool,
    widgets: PropTypes.shape({
        class: PropTypes.string,
        columns: PropTypes.object,
    }),
    onClosed: PropTypes.func,
}

export default PopupGrid