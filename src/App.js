import { useState } from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import TodoList from './components/todoList';


function App() {
  const [todoList,setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);

  function handleTodoClick(todo) {
      const index = todoList.findIndex(x => x.id == todo.id);
      if(index < 0) return;
      // clone state ban đầu trước khi ta thay đổi state đó
      const newTodoList = [...todoList];
      newTodoList.splice(index,1);
      setTodoList(newTodoList);
  }



  return (
    <div className="App">
      <h1>React hooks - TodoList</h1>
          <TodoList todos={todoList} onTodoClick= {handleTodoClick} />
      
    </div>
  );
}

export default App;
