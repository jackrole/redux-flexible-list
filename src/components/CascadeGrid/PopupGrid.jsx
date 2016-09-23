import React, {PropTypes} from 'react'

import ModalForm from '../doodads/ModalForm2'
import Grid from './Grid'

// class PopupGrid extends ModalForm {
//     render() {
//         return (
//             <ModalForm modalType="popupgrid">
//                 <div className="cascadegrid-wrapper">
//                     <div className="scroller">
//                         <Grid rows={this.props.rows} header={this.props.header} />
//                     </div>
//                 </div>
//             </ModalForm>
//         )
//     }
// }

const PopupGrid = ({rows, header, onClosed}) => {
    return (
        <ModalForm modalType="popupgrid" onClosed={onClosed}>
            <div className="cascadegrid-wrapper">
                <div className="scroller">
                    <Grid rows={rows} header={header} />
                </div>
            </div>
        </ModalForm>
    )
}

PopupGrid.propTypes = {
    rows: PropTypes.array,
    header: PropTypes.array,
    onClosed: PropTypes.func,
}

export default PopupGrid