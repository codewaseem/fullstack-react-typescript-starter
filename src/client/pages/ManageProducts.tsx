import * as React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Calendar from "react-calendar";
import ProductForm from "../forms/ProductForm";
import { Divider, Header, Card, Button, Form, Input, TextArea } from "semantic-ui-react";

export default class ManageProductsPage extends React.Component<any, any> {

  state = {
    isEditing: false,
    selectedProduct: null
  };

  componentDidMount() {
    if (!this.props.products.products) {
      console.log("componentDidMount");
      (this.props as any).getProducts();
    }
  }

  handleEditClick = (id: string) => {
    ///
    this.setState(() => {
      return {
        isEditing: true,
        selectedProduct: this.props.products.productMap[id]
      };
    });
  }

  handleDeleteClick = (id: string) => {
    //
  }

  onProductAddSubmit = (productDetails) => {
    //
    this.props.addProduct(productDetails);
  }

  onProductUpdateSubmit = (productDetails) => {
    console.log("here");
    this.props.updateProduct(productDetails._id, productDetails).then(window.history.back());
    // window.history.back();
  }

  render() {
    return (
      <Route
        render={({ history, match }) => {
          return (
            <Switch>
              <Route
                path={match.url + "/edit"}
                render={() => {
                  return <ProductForm product={this.state.selectedProduct} onSubmit={this.onProductUpdateSubmit} />;
                }}
              />
              <Route
                render={() => {
                  // tslint:disable-next-line:max-line-length
                  return <ProductsView
                    products={this.props.products.productList}
                    onEditClick={(id) => {
                      history.push(match.url + "/edit");
                      this.handleEditClick(id);
                    }}
                    onDeleteClick={this.handleDeleteClick}
                    onProductAddSubmit={this.onProductAddSubmit}
                  />;
                }}
              />
            </Switch>
          );
        }}
      />
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
class ProductsView extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Header>All Products</Header>
        <Card.Group>
          {(this.props.products || []).map((product, index) => {
            // tslint:disable-next-line:jsx-no-multiline-js
            return (
              <Card key={index}>
                <Card.Content>
                  <Card.Header>{product.name}</Card.Header>
                  <Card.Meta>{product.rsvp_link}</Card.Meta>
                  <Card.Description>{product.description}</Card.Description>
                </Card.Content>
                <Card.Content extra={true}>
                  <div className="ui two buttons">
                    <Button
                      onClick={() => this.props.onEditClick(product._id)}
                      basic={true}
                      color="blue"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => this.props.onDeleteClick(product._id)}
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
        <Divider />
        <Header>Add New Product</Header>
        <ProductForm onSubmit={this.props.onProductAddSubmit} />
      </div>
    );
  }
}