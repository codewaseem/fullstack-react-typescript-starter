import * as React from "react";
import { Card, Button, Form, Input, TextArea } from "semantic-ui-react";
import { Link, Route, Switch } from "react-router-dom";
import Calendar from "react-calendar";

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

class EditProduct extends React.Component {
  state = {
    date: new Date()
  };
  onChange = (date) => console.log(date) || this.setState({ date });
  render() {
    const product = products[0];
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field control={Input} label="Product Name" value={product.name} placeholder="Product Name" />
          <Form.Field
            control={() => <Calendar value={this.state.date} onChange={this.onChange} />}
            label={"Date"}
          />
        </Form.Group>
       
        <Form.Field
          id="form-textarea-control-description"
          value={product.description}
          control={TextArea}
          label="Description"
          placeholder="Description"
        />
        <Form.Field id="form-button-control-public" control={Button} content="Update" />
      </Form>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export default class ManageProductsPage extends React.Component {
  render() {

    return (
      <div>
        <Switch>
          <Route path={"/admin-panel/manage-products/edit"} component={EditProduct} />
          <Route
            render={({ match, history }) => {
              return (
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
                            <Button
                              onClick={() => history.push(`${match.url}/edit`)}
                              basic={true}
                              color="blue"
                            >
                              Edit
                            </Button>
                            <Button
                              onClick={() => history.push(`${match.url}/delete`)}
                              basic={true}
                              color="red"
                            >
                              Delete
                            </Button>
                          </div>
                        </Card.Content>
                      </Card>
                    );
                  })}
                </Card.Group>
              );
              // tslint:disable-next-line:jsx-alignment
            }}
          />;
        </Switch>
      </div>
    );

  }
}
