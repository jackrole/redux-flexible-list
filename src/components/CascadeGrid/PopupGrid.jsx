import React, {PropTypes} from 'react'

import ModalForm from '../doodads/ModalForm'
import TitledModalForm from '../doodads/TitledModalForm'
import Grid from './Grid'

import './styles/popup-grid.css'

const PopupGrid = ({rows, header, title, preExpander, widgets, onClosed}) => {
    let props = {modalType: 'popup-grid', rows, header, title, preExpander, widgets, onClosed}
    let content = (
        <div className="cascadegrid-wrapper">
            <div className="scroller">
                <Grid {...props} />
            </div>
        </div>
    )

    if (title)
        return <TitledModalForm {...props} >{content}</TitledModalForm>
    else
        return <ModalForm {...props} >{content}</ModalForm>
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