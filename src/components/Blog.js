import React, { Component } from 'react'
import { Button,Card } from "react-bootstrap";
export default class Blog extends Component {
    render() {
        return (
          <div className="container ">
                <div className="row">
                    
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src="http://placekitten.com/100/80" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src="http://placekitten.com/100/80" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src="http://placekitten.com/100/80" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src="http://placekitten.com/100/80" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        );
    }
}
