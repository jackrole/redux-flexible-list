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
        // Whether current row has detail rows or not.
        cascaded: PropTypes.bool,
        // If `true` it means current row has cascaded sibling(s).
        // So it needs to append an empty <td/> element to the front
        // or end of current row according to the prop `preExpander`.
        hasCascadedSibling: PropTypes.bool,
        // If detail rows exist, use expanded to present
        // Whether the detail rows are shown or hidden.
        expanded: PropTypes.bool,
        // The display position of expander.
        //   `true`:   shown on the first of row
        //   `false`:  shown on the end of row
        preExpander: PropTypes.bool,
        onExpanderClick: PropTypes.func,
        widgets: PropTypes.objectOf(
            PropTypes.object,
        ),
    }

    static defaultProps = {
        cascaded: true,
        expanded: false,
        widgets: {},
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
        let {cells, cascaded, expanded, onExpanderClick, widgets} = this.props

        let cellElement = cells.map((cell, index) => {
            if (index in widgets) {
                let widget = widgets[index]
                if ('class' in widget) {
                    return <td key={index} className={widget['class']} >{cell}</td>
                }
            }

            return <td key={index} >{cell}</td>
        })

        if (onExpanderClick === undefined)
            onExpanderClick = this.onExpanderClickDefault

        var action = this.props.preExpander ? Array.prototype.unshift : Array.prototype.push
        if (cascaded) {
            var spanClass = expanded === true ? 'glyphicon glyphicon-chevron-up' : 'glyphicon glyphicon-chevron-down'

            action.call(
                cellElement,
                <td ref={(ref) => this.self = ref} key={cellElement.length} className="expander" onClick={onExpanderClick}>
                    <span className={spanClass} />
                </td>
            )
        } else if (this.props.hasCascadedSibling) {
            action.call(cellElement, <td key={cellElement.length} className="expander" />)
        }

        return <tr>{cellElement}</tr>
    }
}

export default Row