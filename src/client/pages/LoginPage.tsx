import * as React from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";

import "whatwg-fetch";
export default class LoginPage extends React.Component {

  render() {
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
            <Form size="large">
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