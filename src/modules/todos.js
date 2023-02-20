//1.액션타입
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const DEL_TODO = "todos/DEL_TODO"
//2.액션 생성함수
let nextId = 1;
//[{id: 1, text: "할일", isDone: false},{id: 2, text: "할일" ,isDone: false},{id: 3, text: "할일" ,isDone: false}]
//{ type: ADD_TODO, todo: {id: 새로운 번호, text: "새로운할일"}}
//addTodo("리액트 공부하기")
//{type: ADD_TODO, todo: {id:1, text: "리액트 공부하기"}}
//액션객체는 dispatch()할때 사용됨
//addTodo 호출하는 값을 받을거 text로
export const addTodo = (text) => ({  //객체 리턴은 항상 소괄호 씌워줘야함
    type: ADD_TODO,  
    todo:{
        id: nextId++, 
        text: text
    }
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
})
export const delTodo = (id) => ({
    type: DEL_TODO,
    id: id
})
//3.리듀서함수
export default function todos(state=[], action){
    switch(action.type){
        case "ADD_TODO":
            return[
                ...state,
                action.todo
            ];
        case DEL_TODO:
            return state.filter(todo => todo.id !== action.id)
        case TOGGLE_TODO:
            return state.map(todo=> todo.id === action.id ? //아이디가 일치하는지?
                {...todo, isDone: !todo.isDone}: todo)        //일치하면 isDone반전 시키기
        default:                                              //일치하지 않으면 원래값 리턴
            return state;    
    
    }
}