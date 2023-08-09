import './App.css'

import {FC} from 'react';
import {useDispatch} from "react-redux";
import {fetchPostRequest} from "./redux/action-creators/post.ts";
import {useTypedSelector} from "./hooks/useTypedSelector.ts";
import {fetchTodoRequest} from "./redux/action-creators/todo.ts";

const App: FC = () => {
  const dispatch = useDispatch()
  const postsState = useTypedSelector(state => state.posts)
  const todosState = useTypedSelector(state => state.todos)

  if(postsState.pending){
    return <h1>Fetching posts</h1>
  }
  if(postsState.error){
    return <h1>{postsState.error}</h1>
  }
  if(todosState.pending){
    return <h1>Fetching todos</h1>
  }
  if(todosState.error){
    return <h1>{todosState.error}</h1>
  }

  return (
      <div>
        <button onClick={() => {
          dispatch(fetchTodoRequest())
          dispatch(fetchPostRequest())
        }}>Fetch</button>
        {postsState.posts.map(post =>
            <div>
              {post.title}
            </div>
        )}
        {todosState.todos.map(todo =>
            <div>
              {todo.title}
            </div>
        )}
      </div>
  );
};

export default App
