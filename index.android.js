/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import {Provider} from 'react-redux';
import configureStore from './src/store';
import rootReducer from './src/reducers/index';
import MainContainer from './src/containers/MainContainer';

export default class MyReduxDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            store: configureStore(rootReducer),
        };
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <MainContainer />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('MyReduxDemo', () => MyReduxDemo);
