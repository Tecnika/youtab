import { Card, Button, Placeholder } from "react-bootstrap";

function Block() {
    return (
            <Card style={{ width: '10rem' }}>
                <Card.Body>
                    <Card.Title>Название</Card.Title>
                    <Card.Text>
                        данные
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
    )
}
export default Block;