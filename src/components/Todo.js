import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = (props) => {

    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);

    // const [todoData, setTodoData] = useState({
    //     inputTodo: '',
    //     todoList: []
    // });


    useEffect(() => {
        axios.get(`https://reacthooks-c1ee9.firebaseio.com/todo.json`).then(res => {
            console.log(res);
            const data = res.data;
            let tempTodo = [];
            for (const dt in data) {
                tempTodo.push(data[dt].name);
            }

            setTodoList(tempTodo);
        })
    }, [])


    const inputChangeHandler = (event) => {
        setTodoName(event.target.value);
    }


    const todoAddHandler = () => {
        setTodoList([...todoList, todoName]);
        axios.post('https://reacthooks-c1ee9.firebaseio.com/todo.json', {
            name: todoName
        }).then(res => {
            console.log(`Data added`);
        }).catch(res => {
            console.log(res);
        });
    }


    return (
        <>
            <input
                type='text'
                placeholder='Todo'
                onChange={inputChangeHandler}
                value={todoName}
            />
            <button
                type='button'
                onClick={todoAddHandler}
            >
                Add
            </button>
            <br />
            <div>
                <p>My Todo List</p>
                <ul>
                    {
                        todoList.map((el, i) => <li key={i}>{el}</li>)
                    }
                </ul>
            </div>
        </>
    );
};

export default Todo;