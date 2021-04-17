import { useEffect, useState } from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import PostList from './components/PostList';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';


function App() {
  const [todoList,setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);

  const [postList , setPostList] = useState([]);

  useEffect(() => {
      async function fetchPostList() {
        //...
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({responseJSON});
        console.log('hoang');
        const {data} = responseJSON;

        setPostList(data);
        
      }
      // errol gọi function trong block của chính nó
      // fetchPostList();
  
  }, []);

  function handleTodoClick(todo) {
      const index = todoList.findIndex(x => x.id == todo.id);
      if(index < 0) return;
      // clone state ban đầu trước khi ta thay đổi state đó
      const newTodoList = [...todoList];
      newTodoList.splice(index,1);
      setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
     console.log(formValues);
    const newTodoList = [...todoList];
    const newToDo = {
      // set id cho các children trong list để nó có index unique
        id : todoList.length +1,
        ...formValues
    };
     newTodoList.push(newToDo);
     setTodoList(newTodoList);

  }


  return (
    <div className="App">
      <h1>React hooks - PostList</h1>
          {/* <TodoList todos={todoList} onTodoClick= {handleTodoClick} />
          <TodoForm onSubmit = {handleTodoFormSubmit}/> */}
          <PostList posts={postList}/>

    </div>
  );
}

export default App;
