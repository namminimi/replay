import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InsertTodo from '../components/InsertTodo';
import TodoLists from '../components/TodoLists';
import { addTodo, delTodo, delTodoAsync, toggleTodo, toggleTodoAsync } from '../modules/todos';

const TodoContainer = () => {
    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch()
    const onAddTodo = (text) => {
        dispatch(addTodo(text))
    }
    /* const onDelTodo = (id) => {
        dispatch(delTodo(id))
    } */
    //thunk 실습 
    const onDelTodo = (id) => {
        dispatch(delTodoAsync(id))
    }
    /* const onToggleTodo = (id) => {
        dispatch(toggleTodo(id))
    } */
    //thunk 실습
    const onToggleTodo = (id) => {
        dispatch(toggleTodoAsync(id))
    }
    return (
        <div>
            <InsertTodo onAddTodo={onAddTodo}/>
            <TodoLists todos={todos} onDelTodo={onDelTodo} onToggleTodo={onToggleTodo} />
        </div>
    );
};

export default TodoContainer;