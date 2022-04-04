import './App.css';
import React, {useState} from 'react';


function App() {
  const [todos, setToDos] = useState([
    {name: "Buy Shopping", priority: "high"},
    {name: "Clean Bathroom", priority: "low"},
    {name: "Car's MOT", priority: "high"}
  ]);

  const toDoNodes = todos.map((item, index) => {
    return(
      <li key={index} className={(item.priority === "high") ? 'high' : 'low'}> 
        <span>{item.name}</span>
      </li>
    )
    });

  const [newItem, setNewItem] = useState(' ');
  
  const handleItemInput = (event) => {
    setNewItem(event.target.value);
  }
  
  const [selectedOption, setSelectedOption] = useState('low');

  const onValueChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const saveNewItem = (event) => {
    event.preventDefault();
    const copyToDos = [...todos];
    copyToDos.push({name:newItem, priority:selectedOption});
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
        <input type='radio' id='high' name='priority' value='high'
          checked={selectedOption==='high'}
          onChange={onValueChange}
        />
        <label for='high'>High</label>
        <input type='radio' id='low' name='priority' value='low'
          checked={selectedOption==='low'}
          onChange={onValueChange}
        />
        <label for='low'>Low</label>
        <input type='submit' value='Save New Item'/>

      </form>

      <ul>
        {toDoNodes}
      </ul>
    </div>
  );
}

export default App;
