import { useState } from 'react';
import { Card, Form, Container, Navbar, Button, Stack } from 'react-bootstrap';

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todoList, setTodoList] = useState([])
  function handleSubmit(e) {
    e.preventDefault()
    setTodoList(currentTodoList => {
      return [
        ...currentTodoList, { id: crypto.randomUUID(), title: newItem, completed: false }
      ]
    })
    setNewItem("")
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

        <div className='container w-75 py-5 ms-4' style={{ maxWidth: '600px' }}>
          <Card className='bg-light'>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="textInput">
                  <Stack gap={3}>
                    <Form.Label className="text-left w-100 h5">Add New Item</Form.Label>
                    <Form.Control type="text" value={newItem} onChange={e => setNewItem(e.target.value)} placeholder="Enter Todo" />
                    <Button variant="primary form-control" type="submit" className='w-50 ms-auto'>
                      Add
                    </Button>
                  </Stack>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card >
        </div>
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