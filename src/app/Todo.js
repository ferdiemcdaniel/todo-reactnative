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
           items: [
               {title: "Learn Redux" , done: false},
               {title: "Learn native" , done: false}
           ],
           text: "" 
        }
    }

    handleChange(text){
        this.setState({text});
    }

    handleSubmit(){
        if(!this.state.text.length){
            return;
        }
        const newState = {items: [...this.state.items, {title: this.state.text}], text: ""};
        this.setState(newState);
    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text>My To Do List</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});