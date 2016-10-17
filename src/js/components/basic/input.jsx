import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as basicUsageActions from '../../actions/basic-usage';

class Input extends React.Component {

    onValueChange(ev) {
        this.props.inputChanged(
            ev.target.value
        );
    }

    render() {
        return (
            <input
                type="text"
                className="form-control"
                placeholder="type anything..."
                value={this.props.currentValue}
                onChange={this.onValueChange.bind(this)}
            />
        );
    }
}

const mapStateToProps = (state = {}) => {
    return {
        currentValue: state.inputValue,
    };
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        inputChanged: basicUsageActions.inputChanged,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Input);
