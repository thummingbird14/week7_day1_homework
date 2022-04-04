import './App.css';
import React, {useState} from 'react';


function App() {
  const [todos, setToDos] = useState([
    "Buy Shopping",
    "Clean Bathroom",
    "Car's MOT"
  ]);

  const toDoNodes = todos.map((item, index) => {
    return(
      <li key={index}> 
        <span>{item}</span>
      </li>
    )
    });

  const [newItem, setNewItem] = useState(' ');
  
  const handleItemInput = (event) => {
    setNewItem(event.target.value);
  }

  const saveNewItem = (event) => {
    event.preventDefault();
    const copyToDos = [...todos];
    console.log(newItem);
    copyToDos.push(newItem);
    setToDos(copyToDos);
    setNewItem('');
  }
  return (
    <div className="App">

      <h1>ToDo List</h1>
      <hr></hr>
      <form onSubmit={saveNewItem}> 
        <label htmlFor='new-item'>Add a new list item:</label>
        <input id='new-item' type='text' value={newItem} onChange={handleItemInput}/>
        <input type='submit' value='Save New Item'/>

      </form>

      <ul>
        {toDoNodes}
      </ul>
    </div>
  );
}

export default App;
