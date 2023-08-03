import { useState } from 'react';
import { Card, Form, Container, Navbar, Button, Stack } from 'react-bootstrap';
import { NewTodoForm } from './NewTodoForm';
export default function App() {

  const [todoList, setTodoList] = useState([])

  function addTodo(title){
    setTodoList(currentTodoList => {
      return [
        ...currentTodoList, { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }
  function toggleTodo(id, completed) {
    setTodoList(currentTodoList => {
      return currentTodoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }
  function handleDelete(id) {
    setTodoList(currentTodoList => {
      return currentTodoList.filter(todo =>{
        return todo.id !==id
      })
    })
  }
  return (
    <>
      <Container fluid className=" bg-secondary p-0" style={{ height: '100vh', backgroundColor: 'lightblue' }}>
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand style={{ fontSize: '25px', fontWeight: 'bold' }}>Todo App</Navbar.Brand>
          </Container>
        </Navbar>
<NewTodoForm onSubmit={addTodo}/>
        <div>
          <div>
            <Form className='container w-75 ms-4' style={{ maxWidth: '600px' }}>
              <div className='h3 mb-2'>Todo List</div>
              <Form.Group>
                {todoList.map(todo => {
                  return <Stack direction="horizontal" gap={0} className='mb-2' key={todo.id}>
                    <Form.Check
                      type="checkbox"
                      label=""
                      className="d-flex align-items-center justify-content-center"
                      checked={todo.completed}
                      onChange={e => {
                        toggleTodo(todo.id, e.target.checked)
                      }}
                    />
                    <Form.Text className='text-center  my-auto me-2 text-light' style={{ fontSize: '20px' }}>
                      {todo.title}
                    </Form.Text>
                    <Button
                      variant="danger"
                      className="ml-auto btn-sm ms-auto me-5"
                      onClick={()=>handleDelete(todo.id)}
                    >
                      Delete
                    </Button>

                  </Stack>

                })}

              </Form.Group>
            </Form>


          </div>
        </div>
      </Container>
    </>
  );
}