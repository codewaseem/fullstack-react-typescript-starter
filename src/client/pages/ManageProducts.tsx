import * as React from "react";
import { Divider, Header, Card, Button, Form, Input, TextArea } from "semantic-ui-react";
import { Link, Route, Switch } from "react-router-dom";
import Calendar from "react-calendar";

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
    console.log(productDetails);
    this.props.addProduct(productDetails);
  }

  onProductUpdateSubmit = (productDetails) => {
    console.log(productDetails);
    window.history.back();
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

// tslint:disable-next-line:max-classes-per-file
class ProductForm extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    let { product } = props;
    if (!product) {
      product = {
        name: "",
        image_url: "",
        rsvp_link: "",
        description: ""
      };
    }
    this.state = {
      name: product.name,
      image_url: product.image_url,
      rsvp_link: product.rsvp_link,
      description: product.description,
      isUntouched: true,
      nameError: false,
      imageUrlError: false,
      rsvpError: false,
      descriptionError: false
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => {
      return {
        isUntouched: false,
        [name]: value
      };
    });
  }

  setEmptyFormState = () => {
    this.setState({
      name: "",
      image_url: "",
      rsvp_link: "",
      description: "",
      isUntouched: true,
      nameError: false,
      imageUrlError: false,
      rsvpError: false,
      descriptionError: false
    });
  }

  handleSubmit = () => {
    const newState = { ...this.state } as any;
    const { name, image_url, rsvp_link, description } = this.state as any;
    let isError = false;
    if (!name) {
      isError = true;
      newState.nameError = true;
    }
    if (!image_url) {
      isError = true;
      newState.imageUrlError = true;
    }
    if (!rsvp_link) {
      isError = true;
      newState.rsvpError = true;
    }
    if (!description) {
      isError = true;
      newState.descriptionError = true;
    }
    if (isError) {
      this.setState(() => {
        return newState;
      });
    } else {
      this.setEmptyFormState();
      (this.props as any).onSubmit({ name, image_url, rsvp_link, description });
    }
  }

  render() {
    const { name, image_url, rsvp_link, description,
      nameError, imageUrlError, rsvpError, descriptionError
    } = this.state as any;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field
            onChange={this.handleInputChange}
            control={Input}
            label="Product Name"
            name={"name"}
            value={name}
            placeholder="Product Name"
            error={!this.state.isUntouched && nameError}
          />
          <Form.Field
            name={"image_url"}
            control={Input}
            label="Image Link"
            value={image_url}
            onChange={this.handleInputChange}
            placeholder="https://image.com/my.jpg"
            error={!this.state.isUntouched && imageUrlError}
          />
        </Form.Group>
        <Form.Field
          name={"rsvp_link"}
          onChange={this.handleInputChange}
          control={Input}
          label="RSVP Link"
          value={rsvp_link}
          placeholder="RSVP Link"
          error={!this.state.isUntouched && rsvpError}
        />
        <Form.Field
          onChange={this.handleInputChange}
          id="form-textarea-control-description"
          value={description}
          control={TextArea}
          label="Description"
          placeholder="Description"
          name={"description"}
          error={!this.state.isUntouched && descriptionError}
        />
        <Form.Field onClick={this.handleSubmit} control={Button} content={"Submit"} />
      </Form>
    );
  }
}
