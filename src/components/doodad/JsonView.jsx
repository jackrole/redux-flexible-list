import React, {PropTypes} from 'react'

const JsonView = ({json, title}) => {
    return (
        <div>
            <span>{title}</span>
            <textarea
                id="state-info"
                style={{width: '100%', height: '200px'}}
                value={JSON.stringify(json, null, 2)}
                readOnly
            />
        </div>
    )
}

JsonView.propTypes = {
    json: PropTypes.any,
    title: PropTypes.string,
}

export default JsonView
