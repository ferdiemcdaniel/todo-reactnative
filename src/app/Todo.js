import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import StatedTodoList from './containers/StatedTodoList';
import { connect } from 'react-redux';
import { addTodo } from './actions';


const Todo = ({dispatch}) => {
    state = {
        text: ''
    }


    handleChange(text){
        this.setState({text});
    }

    handleSubmit(e){
        const text = this.state.text.trim();
        if(!this.state.text.length){
            return;
        }
        dispatch(addTodo(text))
        this.setState({ text: '' });
    }
    
    render() {
        const { text } = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.header}><Text style={styles.headerTitle}>My To Do List</Text></View>
                <TextInput onChangeText={this.handleChange.bind(this)} value={text} placeholder="to do..."></TextInput>
                <TouchableOpacity onPress={this.handleSubmit.bind(this)}><Text>Add</Text></TouchableOpacity>
                <StatedTodoList />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  header:{
    height: 50,
    backgroundColor: 'papayawhip',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  headerTitle: {
    fontWeight: 'bold',
    color: 'palevioletred',
    textAlign: 'center',
  }
});

export default connect()(Todo);