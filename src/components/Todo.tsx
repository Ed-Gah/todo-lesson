import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TodoItem from './TodoItem';
//Talk about react native documentation
const Todo = () => {
  const [task, setTask] = useState<string>('');
  const [taskItems, setTaskItems] = useState<string[]>([]);

 const addTask = () => {
  taskItems.push(task);
  setTaskItems([...taskItems, task])
  setTask('');
 }

  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.title}>What will you be doing today?</Text>

        <View style={styles.items}>
          {taskItems.map((item, index) => (
            <TodoItem key={index} task={item} />
          ))}
          <TodoItem task={'Todo 1'} />
        </View>
      </View>
      {/* Avoid when u click on the input it pushes everything up when the keyboard comes up. */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter your to do" value={task} onChangeText={(text => setTask(text))} />
        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addButton}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    height: '100%',
    backgroundColor: '#F5F5F5',
    paddingTop: 50,
    paddingHorizontal: 24,
    /* margin: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, */
  },
  taskContainer: {},
  title: {fontSize: 20, fontWeight: 'bold', color: 'black'},
  items: {marginTop: 20},

  inputContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 16,
    // backgroundColor: '#fff',
  },
  input: {
    padding: 16,
    width: 280,
    backgroundColor: 'white',
    borderRadius: 8,
    borderColor: 'grey',
    marginLeft: 24
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 2,
    marginLeft: 24,
  },
  addText: {
    color: 'grey',
    fontSize: 24,
  },
});
export default Todo;
