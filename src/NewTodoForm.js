 import {useState} from 'react';
 import './NewTodoForm.css';

const NewTodoForm = ({handleSubmit})=>{

  const [todoText,setTodoText] = useState('');

  const handleChange=(event)=>{
    setTodoText((n)=> n = event.target.value);
  }

  const submitForm = (event)=>{
    handleSubmit(event,todoText);
    setTodoText((n)=> n='');
  };


  return <form className='NewTodoForm' onSubmit={submitForm} className="NewBoxForm">
    <label>Todo<input type="text" value={todoText} onChange={handleChange} placeholder="Make a todo list"/></label>
    <button type="submit">Add</button>
  </form>
}

export default NewTodoForm;
