import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import Layout from './components/layout';
import BasicInput from './components/basic/input';
import BasicListGroup from './components/basic/list-group';
import BasicBtns from './components/basic/btns';

import BasicUsageReducers from './reducers/basic-usage';

const basicUsageStore = createStore(
    BasicUsageReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={basicUsageStore}>
        <Layout pageTitle="Basics">
            <div className="col-xs-8">
                <BasicInput />
                <br/>
                <BasicListGroup />
            </div>
            <div className="col-xs-4">
                <BasicBtns />
            </div>
        </Layout>
    </Provider>,
    document.getElementById('root')
);
