import React, {PropTypes} from 'react'
import $ from 'jquery'

class Row extends React.Component {
    constructor() {
        super()
        this.onExpanderClickDefault = this.onExpanderClickDefault.bind(this)
    }

    static propTypes = {
        cells: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        // whether current row has detail rows or not.
        cascaded: PropTypes.bool,
        // if detail rows exist, use expanded to present
        // whether the detail rows are shown or hidden.
        expanded: PropTypes.bool,
        onExpanderClick: PropTypes.func,
    }

    static defaultProps = {
        cascaded: true,
        expanded: false,
    }

    onExpanderClickDefault() {
        let animationTime = 250
        let domJqueryObj =  $(this.self)
        domJqueryObj.parent().next().slideToggle(animationTime)
        domJqueryObj.parent().next().find('>td>div').slideToggle(animationTime, function() {
            if ($(this).is(':visible'))
                domJqueryObj.find('span').attr('class', 'glyphicon glyphicon-chevron-up')
            else
                domJqueryObj.find('span').attr('class', 'glyphicon glyphicon-chevron-down')
        })
    }

    render() {
        let {cells, cascaded, expanded, onExpanderClick} = this.props

        let cellElement = cells.map((cell, index) => {
            return <td key={index} >{cell}</td>
        })

        if (onExpanderClick === undefined)
            onExpanderClick = this.onExpanderClickDefault

        if (cascaded)
            if (expanded === true)
                cellElement.push(
                    <td ref={(ref) => this.self = ref} key={cellElement.length} className="expander" onClick={onExpanderClick}>
                        <span className="glyphicon glyphicon-chevron-up" />
                    </td>
                )
            else  // false/null/undefined
                cellElement.push(
                    <td ref={(ref) => this.self = ref} key={cellElement.length} className="expander" onClick={onExpanderClick}>
                        <span className="glyphicon glyphicon-chevron-down" />
                    </td>
                )

        return <tr>{cellElement}</tr>
    }
}

export default Row