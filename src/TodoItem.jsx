import { Button, Form, Stack } from "react-bootstrap"


export function TodoItem({id,title,completed,toggleTodo,deleteTodo}) {
    return (
        <Stack direction="horizontal" gap={0} className='mb-2'>
            <Form.Check
                type="checkbox"
                label=""
                className="d-flex align-items-center justify-content-center"
                checked={completed}
                onChange={e => {
                    toggleTodo(id, e.target.checked)
                }}
            />
            <Form.Text className='text-center  my-auto me-2 text-light' style={{ fontSize: '20px' }}>
                {title}
            </Form.Text>
            <Button
                variant="danger"
                className="ml-auto btn-sm ms-auto me-5"
                onClick={() => deleteTodo(id)}
            >
                Delete
            </Button>
        </Stack>
    )
}