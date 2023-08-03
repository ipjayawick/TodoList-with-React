import React from 'react';
import Stack from 'react-bootstrap/Stack';
import { Card, Form, Container, Row, Col, Navbar, Nav, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <>
      <Container fluid className=" bg-secondary p-0" style={{
        height: '100vh', // Set the desired height here
        backgroundColor: 'lightblue', // (Optional) Set background color
        // Add other styles as needed
      }}>
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand style={{ fontSize: '25px', fontWeight: 'bold' }}>Todo App</Navbar.Brand>
          </Container>
        </Navbar>
        <div className='container w-75 py-5 ms-4' style={{maxWidth:'600px'}}>
          <Card className='bg-light'>
            <Card.Body>
              <Form>
                <Form.Group controlId="textInput">
                  <Stack gap={3}>
                    <Form.Label className="text-left w-100 h5">Add New Item</Form.Label>
                    <Form.Control type="text" placeholder="Enter Todo" />
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
            <Form className='container w-75 ms-4' style={{maxWidth:'600px'}}>
              <div className='h3 mb-2'>Todo List</div>
              <Form.Group>
                <Stack direction="horizontal" gap={0} >
                  <Form.Check
                    type="checkbox"
                    label=""
                    className="d-flex align-items-center justify-content-center"
                  />
                  <Form.Text className='text-center  my-auto me-2 text-light' style={{
                    fontSize: '20px', // Set the desired font size here
                    fontWeight: '', // Set the desired font weight here
                  }}>
                    This is a Todo
                  </Form.Text>
                  <Button
                    variant="danger"
                    className="ml-auto btn-sm "
                  >
                    Delete
                  </Button>
                </Stack>
              </Form.Group>
            </Form>


          </div>
        </div>
      </Container>
    </>
  );
}