import React, { useState } from 'react';
import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';
import AuthContext from './auth-context';

function App() {

  const [showTodo, setShowTodo] = useState(0);

  const todoListClickedHandler = (state) => {
    setShowTodo(state);
  }


  return (
    <div>
      <h3>React App</h3>
      <AuthContext.Provider>
        <Header
          onTodoListClicked={todoListClickedHandler.bind(this, 1)}
          onAuthClicked={todoListClickedHandler.bind(this, 0)}
        />
        <hr />
        {
          showTodo ? <Todo /> : <Auth />
        }
      </AuthContext.Provider>
    </div>
  );
}

export default App;
