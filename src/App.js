import { useEffect, useState } from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import queryString from 'query-string';
import PostFitersForm from './components/PostFitersForm';
import Clock from './components/Clock';

function App() {
  const [todoList,setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
  ]);

  const [postList , setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 2,
    _limit: 10,
    _totalRows: 30,
  })

  const [filters , setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: '',
    
  })


  function handlePageChange(newPage) {
    console.log('newPage' + newPage);
    setFilters({
      ...filters,
      _page: newPage
    })
    
  }

  useEffect(() => {
      async function fetchPostList() {
        //...
        try{
          // _limit=10$_page=1, queeyString chuyển object thành chuỗi param
          const paramsString = queryString.stringify(filters);
          const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
          const response = await fetch(requestUrl);
          const responseJSON = await response.json();
          console.log({responseJSON});
          console.log('hoang');
          const {data, pagination} = responseJSON;
  
          setPostList(data);
          setPagination(pagination);
        }catch(error){
          console.log('failed to fetch post list: ', error.message);
        }
        
        
      }
      // errol gọi function trong block của chính nó
      fetchPostList();

  
  }, [filters]);

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

  function handleFiltersChange(newFilters) {
    console.log("New Filters: ", newFilters);
    setFilters({
      ... filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    })
  }
  
  const [showClock, setShowClock] = useState(true);

 
  return (
    <div className="App">
      <h1>React hooks - Clock</h1>
      <PostFitersForm onSubmit={handleFiltersChange}/>
      
      {showClock && <Clock/>}
      <button onClick={() =>setShowClock(!showClock)}>Hide clock</button>

          {/* <TodoList todos={todoList} onTodoClick= {handleTodoClick} />
          <TodoForm onSubmit = {handleTodoFormSubmit}/> */}
          
          
          <PostList posts={postList}/>
          <Pagination 
              pagination={pagination}
              onPageChange={handlePageChange}
          />
    </div>
  );
}

export default App;
