import React, {PropTypes} from 'react'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            queryText: '',
        }

        this.handleQueryTextChange = this.handleQueryTextChange.bind(this)
        this.handleQueryClick = this.handleQueryClick.bind(this)
    }

    static propTypes = {
        resultComponent: PropTypes.element,
        searchAction: PropTypes.func,
    }

    handleQueryTextChange(event) {
        this.setState({queryText: event.value})
    }

    handleQueryClick() {

    }

    render() {
        return (
            <div>
                <div className="input-group">
                    <input
                        ref={ref => this.refQueryText = ref}
                        type="text"
                        className="form-control"
                        value={this.state.queryText}
                        onChange={this.handleQueryTextChange}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" onClick={this.handleQueryClick}>Search</button>
                    </span>
                </div>
            </div>
        )
    }
}
