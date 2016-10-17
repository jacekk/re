import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as basicUsageActions from '../../actions/basic-usage';
import randomStringGenerator from '../../utils/random-string-generator';

class Btns extends React.Component {

    randomString() {
        this.props.inputChanged(
            randomStringGenerator()
        );
    }

    randomLongString() {
        this.props.inputChanged(
            randomStringGenerator(25)
        );
    }

    randomNumber() {
        this.props.inputChanged(
            Math.random()
        );
    }

    clearInput() {
        this.props.clearInput();
    }

    alertValue() {
        alert(this.props.currentValue || 'Input is empty :(')
    }

    render() {
        return (
            <div>
                <div className="btn-group-vertical btn-block">
                    <a className="btn btn-primary" onClick={this.randomString.bind(this)}>
                        Random string
                    </a>
                    <a className="btn btn-primary" onClick={this.randomLongString.bind(this)}>
                        Longer string
                    </a>
                    <a className="btn btn-primary" onClick={this.randomNumber.bind(this)}>
                        Random number
                    </a>
                </div>
                <a className="btn btn-block btn-warning" onClick={this.clearInput.bind(this)}>
                    Clear input
                </a>
                <a className="btn btn-block btn-danger" onClick={this.alertValue.bind(this)}>
                    Alert
                </a>
            </div>
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
        clearInput: basicUsageActions.clearInput,
        inputChanged: basicUsageActions.inputChanged,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Btns);
