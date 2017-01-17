/**
 * Created by tfn on 2017/1/17.
 */

import React, {Component} from 'react';
import {StyleSheet, TouchableHighlight, Text, View, ActivityIndicator,} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../actions/todo';

/**
 * 异步组件
 */
class asyncComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoging: false,
            // resultTxt: '用户还未登陆',
        };
    }

    render() {

        let spinner = (this.state.isLoging && this.props.status === 'starting')
            ? (<ActivityIndicator size={'large'}/>) : (<View/>);

        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.button} onPress={this.pressLogin}>
                    <Text style={styles.buttonText}>点我3秒后登陆成功</Text>
                </TouchableHighlight>

                {spinner}

                <Text style={styles.resultText}>已登陆用户：{this.props.user}</Text>
            </View>
        );
    }

    pressLogin = () => {
        this.setState({
            isLoging: true,
        });
        const {dispatch} = this.props;
        dispatch(login());
    };
}

function select(state) {
    return {
        //此处state中的属性定义在了rootReducer里了。
        // isLogined: state.lReducer.isLogined,
        user: state.lReducer.user,
        status: state.lReducer.status,
    };
}

export default connect(select)(asyncComponent);

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
});