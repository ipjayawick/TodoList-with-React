import { useState } from 'react';
import { Card, Form,Button, Stack } from 'react-bootstrap';

export function NewTodoForm({onSubmit}){
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if(newItem==="") return
        onSubmit(newItem)            //this gives addTodo function
        setNewItem("")
      }
      return(
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
      )
}