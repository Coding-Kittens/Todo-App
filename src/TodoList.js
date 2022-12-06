import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import {useState} from 'react';
const TodoList  = ()=>{


  const [todos,setTodos] = useState(null);
  const [newId,setNewId] = useState(0);


  const handleSubmit =(event,todoText)=>{
    event.preventDefault();
    const newTodo ={text:todoText,id:newId}
    setNewId((n)=> n = newId+1);
    setTodos((n)=> n = todos? [...todos,newTodo]:[newTodo]);
  }

  const deleteTodo =(event)=>{
  setTodos((n)=> n =todos.filter(todo=> todo.id != event.target.id));
  }



  return <>
  <NewTodoForm handleSubmit={handleSubmit}/>
  {todos? <ul>{todos.map(todo=><Todo key={todo.id} id={todo.id} todoText={todo.text} deleteTodo={deleteTodo}/>)}</ul> :null}
  </>

}

export default TodoList ;
