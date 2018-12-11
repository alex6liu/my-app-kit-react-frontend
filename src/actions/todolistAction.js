const todos_url = '/todolist';

export const getTodos = (dispatch) => (
    fetch(todos_url)
        .then(res => console.log(res))
        // .then(json => JSON.stringify(json))
        // .then(json => console.log(json))
);

export const receiveTodos = () => ({
    type: 'GET_TODOS',
    payload: {
        
    },
});

export const getOneTodo = () => ({
    type: 'GET_ONE_TODO',
    payload: {
        
    },
});

export const postTodo = () => ({
    type: 'POST_TODO',
    payload: {
        
    },
});

export const changeTodo = () => ({
    type: 'CHANGE_TODO',
    payload: {
        
    },
});

export const deleteTodo = () => ({
    type: 'DELETE_TODO',
    payload: {
        
    },
});
