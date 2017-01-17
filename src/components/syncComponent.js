/**
 * Created by tfn on 2017/1/17.
 */

import React, {Component} from 'react';
import {StyleSheet, TouchableHighlight, Text, View, ScrollView,} from 'react-native';
import {connect} from 'react-redux';
import {addTodo, decTodo, textUpdate} from '../actions/todo';

/**
 * 同步组件
 */
class syncComponent extends Component {
    render() {
        let {number, resultText} = this.props;
        console.log('number:' + number + ',resultText:' + resultText);
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Redux测试Demo</Text>
                </View>
                <TouchableHighlight style={styles.button} onPress={this.pressIncrement.bind(this)}>
                    <Text style={styles.buttonText}>点我数值加一</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={this.pressDecrement.bind(this)}>
                    <Text style={styles.buttonText}>点我数值减一</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={this.pressTextChange.bind(this)}>
                    <Text style={styles.buttonText}>点我文本加_change</Text>
                </TouchableHighlight>

                <ScrollView style={styles.scrollStyle}>
                    <Text style={styles.resultText}>当前数值：{number}，当前文本：{resultText}</Text>
                </ScrollView>
            </View>
        );
    }

    pressIncrement() {
        const {dispatch} = this.props;
        dispatch(addTodo());
    }

    pressDecrement() {
        const {dispatch} = this.props;
        dispatch(decTodo());
    }

    pressTextChange() {
        const {dispatch} = this.props;
        dispatch(textUpdate());
    }

}

function select(state) {
    return {
        //此处state中的属性定义在了rootReducer里了。
        number: state.nReducer.num,
        resultText: state.tReducer.text,
    };
}

export default connect(select)(syncComponent);

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    title: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#55FFCC',
    },
    titleText: {
        fontSize: 25,
        textAlign: 'center',
    },
    button: {
        marginTop: 20,
        height: 35,
        marginHorizontal: 20,
        backgroundColor: '#48BBEC',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#48BBEC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
    },
    resultText: {
        fontSize: 18,
        marginLeft: 20,
    },
    scrollStyle:{
        marginTop: 20,
        height:100,
    },
});