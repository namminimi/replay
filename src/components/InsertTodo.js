import React, { useState } from 'react';

const InsertTodo = ({onAddTodo}) => {
    const [text, setText] = useState("")
    const onChange = (e) => {
        const inputtext = e.target.value;
        setText(inputtext)
    }
    const onClick = () => {
        onAddTodo(text);
    }
    return (
        <div>
            <input name="text" value={text} onChange={onChange}/>
            <button onClick={onClick}>등록</button>
        </div>
    );
};

export default InsertTodo;