import React from 'react';
import { connect } from 'react-redux';

class ListGroup extends React.Component {

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        let { currentValue } = this.props;

        currentValue = currentValue.toString();

        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <b>Lower case: </b>
                    {currentValue && currentValue.toLowerCase() || '-'}
                </li>
                <li className="list-group-item">
                    <b>Upper case: </b>
                    {currentValue && currentValue.toUpperCase()}
                    {! currentValue && '-'}
                </li>
                <li className="list-group-item">
                    <b>Capitalized: </b>
                    {currentValue ? this.capitalize(currentValue) : '-'}
                </li>
            </ul>
        );
    }
}

const mapStateToProps = (state = {}) => {
    return {
        currentValue: state.inputValue,
    };
}

export default connect(mapStateToProps)(ListGroup);
