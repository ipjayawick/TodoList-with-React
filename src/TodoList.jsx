import { TodoItem } from './TodoItem';
import { Form } from 'react-bootstrap';
export function TodoList({todoList,toggleTodo,deleteTodo}) {

    return (
        <div>
            <Form className='container w-75 ms-4' style={{ maxWidth: '600px' }}>
                <div className='h3 mb-2'>Todo List</div>
                <Form.Group>
                    {todoList.map(todo => {
                        //return(<TodoItem id={todo.id} title={todo.title} completed={todo.completed} key={todo.id}/>) 
                        return(<TodoItem {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id}/>) 
                    })}
                </Form.Group>
            </Form>
        </div>
    )
}