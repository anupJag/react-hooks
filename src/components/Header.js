import React from 'react';

const Header = props => {
    return(
        <header>
            <button onClick={props.onTodoListClicked} style={{marginRight: '20px'}}>Todo List</button>
            <button onClick={props.onAuthClicked}>Auth</button>
        </header>
    );
};

export default Header;