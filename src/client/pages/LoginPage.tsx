import * as React from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

export default class LoginPage extends React.Component {

  handleSubmit = (e) => {
    const { onFormSubmit } = this.props as any;
    onFormSubmit("admin@drivensociety.com", "admin@drivensociety");
  }

  render() {
    console.log("Render");
    const { isLoggedIn } = (this.props as any).auth;
    if (isLoggedIn) {
      return <Redirect to={"/admin-panel"} />;
    }
    return (
      <div className="login-form">
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              {" "}Member's Login
          </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked={true}>
                <Form.Input
                  fluid={true}
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid={true}
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Button color="teal" fluid={true} size="large">Login</Button>
              </Segment>
            </Form>
            <Message>
              Become a member
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}