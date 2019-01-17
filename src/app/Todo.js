import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';


export class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
           items: [],
           text: "" 
        }
    }

    componentWillMount(){
        fetch('http://103.104.18.226:5000/items',{
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => this.setState({items: data}));
    }

    handleChange(text){
        this.setState({text});
    }

    handleSubmit(){
        if(!this.state.text.length){
            return;
        }
        console.log("there");
        fetch('http://103.104.18.226:5000/items',{
            method: 'POST',
            body: JSON.stringify({
                title: this.state.text,
                done: false
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            const newState = {items: [data, ...this.state.items], text: ""};
            this.setState(newState);
        })
    }
    
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}><Text style={styles.headerTitle}>My To Do List</Text></View>
                <TextInput onChangeText={this.handleChange.bind(this)} value={this.state.text} placeholder="to do..."></TextInput>
                <TouchableOpacity onPress={this.handleSubmit.bind(this)}><Text>Add</Text></TouchableOpacity>
                <View>
                    {this.state.items.map((todo, i) => (
                        <Text key={i}>{todo.title}</Text>
                    ))}
                </View>
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