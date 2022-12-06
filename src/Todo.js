const Todo  = ({todoText,id,deleteTodo})=>{

return <div className='Todo'>
  <p>{todoText}</p>
  <button className='Todo_button' id={id} type="button" onClick={deleteTodo} >X</button>
  </div>
}

export default Todo ;
