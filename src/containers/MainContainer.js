/**
 * Created by tfn on 16-12-30.
 */
/**
 * 这是根视图组件，当然如果组件多，可以拆分，拆分后的组件可以放在component文件夹中
 */
import React, {Component} from 'react';
import {StyleSheet, TouchableHighlight, Text, View,} from 'react-native';
import {connect} from 'react-redux';
import {addTodo, decTodo, textUpdate} from '../actions/todo';

class MainContainer extends Component {
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
                <Text style={styles.resultText}>当前数值：{number}，当前文本：{resultText}</Text>
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
        number: state.num,
        resultText: state.text,
    };
}

export default connect(select)(MainContainer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginTop: 20,
    },
});