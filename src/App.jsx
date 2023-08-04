import { Container, Navbar } from 'react-bootstrap';
import { NewTodoForm } from './NewTodoForm';
import { useEffect, useState } from 'react';
import { TodoList } from './TodoList';

export default function App() {
  const [todoList, setTodoList] = useState(()=>{
    const localValue=localStorage.getItem("ITEMS")
    if(localValue==null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS",JSON.stringify(todoList))
  }, [todoList])

  function addTodo(title) {
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
  function deleteTodo(id) {
    setTodoList(currentTodoList => {
      return currentTodoList.filter(todo => {
        return todo.id !== id
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
        <NewTodoForm onSubmit={addTodo} />
        <TodoList todoList={todoList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </Container>
    </>
  );
}