/**
 * Created by tfn on 16-12-30.
 */

import React, {Component} from 'react';
import {StyleSheet, View,} from 'react-native';

import SyncComponent from '../components/syncComponent';
import AsyncComponent from '../components/asyncComponent';

/**
 * 这是根视图组件，当然如果组件多，可以拆分，拆分后的组件可以放在component文件夹中
 */
export default class MainContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SyncComponent {...this.props} />
                <AsyncComponent {...this.props} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});