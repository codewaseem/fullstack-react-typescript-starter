import * as React from "react";
import { Card, Button } from "semantic-ui-react";

const products = [{
  name: "The reserve",
  date: "Sat 15, June, 2018",
  location: "Lynch Park, Beverly, MA 01915, USA",
  description: "A brief description about the product"
}, {
  name: "The reserve",
  date: "Sat 15, June, 2018",
  location: "Lynch Park, Beverly, MA 01915, USA",
  description: "A brief description about the product"
}, {
  name: "The reserve",
  date: "Sat 15, June, 2018",
  location: "Lynch Park, Beverly, MA 01915, USA",
  description: "A brief description about the product"
}, {
  name: "The reserve",
  date: "Sat 15, June, 2018",
  location: "Lynch Park, Beverly, MA 01915, USA",
  description: "A brief description about the product"
}];
export default class ManageProductsPage extends React.Component {
  render() {

    return (
      <div>
        <Card.Group>
          {products.map((product, index) => {
            // tslint:disable-next-line:jsx-no-multiline-js
            return (
              <Card key={index}>
                <Card.Content>
                  <Card.Header>{product.name}</Card.Header>
                  <Card.Meta>{product.location}-{product.date}</Card.Meta>
                  <Card.Description>{product.description}</Card.Description>
                </Card.Content>
                <Card.Content extra={true}>
                  <div className="ui two buttons">
                    <Button basic={true} color="blue">Edit</Button>
                    <Button basic={true} color="red">Delete</Button>
                  </div>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>

      </div>
    );
  }
}