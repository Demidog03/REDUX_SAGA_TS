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

  return (
      <div>
        <button onClick={() => {
            dispatch(fetchPostRequest())
            dispatch(fetchTodoRequest())
        }}>Fetch</button>

        {postsState.pending && <h2>Fetching posts...</h2>}
        {todosState.pending && <h2>Fetching todos...</h2>}
        {postsState.error && <h2>{postsState.error}</h2>}
        {todosState.error && <h2>{todosState.error}</h2>}

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
