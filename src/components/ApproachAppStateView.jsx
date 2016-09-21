import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import JsonView from './doodad/JsonView'

const viewCss = {
    position: 'fixed',
    width: '100%',
    zIndex: 99,
    background: '#fff',
    paddingTop: '10px',
    paddingBottom: '10px',
    top: 0,
    boxShadow: '1px 2px 3px #aaa',
}

const _ApproachAppStateView = ({approaches, metaCollectin, propertyList}) => {
    return (
        <div className="container-fluid" style={{marginBottom: '10px', height: '245px',}}>
            <div className="row" style={viewCss}>
                <div className="col-xs-4"><JsonView json={approaches} title={'Approaches'} /></div>
                <div className="col-xs-4"><JsonView json={metaCollectin} title={'MetaCollection'} /></div>
                <div className="col-xs-4"><JsonView json={propertyList} title={'PropertyList'} /></div>
            </div>
        </div>
    )
}

_ApproachAppStateView.propTypes = {
    approaches: PropTypes.any,
    metaCollectin: PropTypes.any,
    propertyList: PropTypes.any,
}

const mapStateToProps = (state) => {
    return {
        approaches: state.approaches,
        metaCollectin: state.metaCollection,
        propertyList: state.propertyList,
    }
}

const ApproachAppStateView = connect(
    mapStateToProps,
)(_ApproachAppStateView)

export default ApproachAppStateView
