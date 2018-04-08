import * as React from "react";
import { Divider, Header, Card, Button, Form, Input, TextArea } from "semantic-ui-react";

export default class ProductForm extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    let { product } = props;
    if (!product) {
      product = {
        name: "",
        image_url: "",
        rsvp_link: "",
        description: "",
        btn_txt: "",
        order: ""
      };
    }
    this.state = {
      name: product.name,
      image_url: product.image_url,
      rsvp_link: product.rsvp_link,
      description: product.description,
      btn_txt: product.btn_txt,
      order: product.order,
      isUntouched: true,
      nameError: false,
      btnError: false,
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
      btn_txt: "",
      order: "",
      isUntouched: true,
      nameError: false,
      imageUrlError: false,
      rsvpError: false,
      btnError: false,
      descriptionError: false
    });
  }

  handleSubmit = () => {
    const newState = { ...this.state } as any;
    const { name, image_url, rsvp_link, description, btn_txt, order } = this.state as any;
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
    if (!btn_txt) {
      isError = true;
      newState.btnError = true;
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
      const product = { name, image_url, rsvp_link, description, btn_txt, order };
      if (this.props.product) {
        (product as any)._id = this.props.product._id;
      }
      (this.props as any).onSubmit(product);
    }
  }

  render() {
    const { name, image_url, rsvp_link, description, btn_txt, order, btnError,
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
        <Form.Group>
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
            name={"btn_txt"}
            onChange={this.handleInputChange}
            control={Input}
            label="Button Text"
            value={btn_txt}
            placeholder="Button Text"
            error={!this.state.isUntouched && btnError}
          />
          <Form.Field
            onChange={this.handleInputChange}
            control={Input}
            label="Order"
            name={"order"}
            value={order}
            placeholder="Order"
          />
        </Form.Group>
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
