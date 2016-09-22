import React, {PropTypes} from 'react'

import ModalForm from '../doodads/ModalForm2'
import Grid from './Grid'

class PopupGrid extends ModalForm {
    render() {
        return (
            <ModalForm modalType="popupgrid">
                <div className="cascadegrid-wrapper">
                    <Grid rows={this.props.rows} header={this.props.header} />
                </div>
            </ModalForm>
        )
    }
}

export default PopupGrid