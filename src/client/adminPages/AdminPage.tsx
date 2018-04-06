import * as React from "react";
import { Container, Card } from "semantic-ui-react";
import { Link, Route, Switch } from "react-router-dom";
import { ManageProductsView, ManageAboutUsView, ManageEventsView, ManageGuestsView } from "./";
import { EnsureAdmin } from "./EnsureIsAdmin";

class HomePage extends React.Component {

  public render() {
    return (
      <div
        style={{ width: "80%", margin: "50px auto" }}
      >
        <Switch>
          <Route
            path="/admin-panel/manage-products"
            component={ManageProductsView}
          />
          <Route
            path="/admin-panel/manage-about-us"
            component={ManageAboutUsView}
          />
          <Route
            path="/admin-panel/manage-events"
            component={ManageEventsView}
          />
          <Route
            path="/admin-panel/manage-guests"
            component={ManageGuestsView}
          />
          <Route
            // tslint:disable-next-line:jsx-no-multiline-js
            render={(props) => {
              return (
                <Card.Group>
                  <Card onClick={() => { props.history.push(`${props.match.url}/manage-products`); }} >
                    <Card.Content>
                      <Card.Header>Products</Card.Header>
                      <Card.Description>Manage products</Card.Description>
                    </Card.Content>
                  </Card>
                  <Card onClick={() => { props.history.push(`${props.match.url}/manage-about-us`); }} >
                    <Card.Content>
                      <Card.Header>About Us</Card.Header>
                      <Card.Description>Change about us section</Card.Description>
                    </Card.Content>
                  </Card>
                  <Card onClick={() => { props.history.push(`${props.match.url}/manage-guests`); }} >
                    <Card.Content>
                      <Card.Header>Guests</Card.Header>
                      <Card.Description>Manage driven society guests</Card.Description>
                    </Card.Content>
                  </Card>
                  <Card onClick={() => { props.history.push(`${props.match.url}/manage-events`); }}>
                    <Card.Content>
                      <Card.Header>Events</Card.Header>
                      <Card.Description>Manage calendapanelr events</Card.Description>
                    </Card.Content>
                  </Card>
                  <Card onClick={() => { props.history.push(`${props.match.url}/account-settings`); }}>
                    <Card.Content>
                      <Card.Header>Store</Card.Header>
                      <Card.Description>Manage driven society store.</Card.Description>
                    </Card.Content>
                  </Card>
                  <Card onClick={() => { props.history.push(`${props.match.url}/account-settings`); }}>
                    <Card.Content>
                      <Card.Header>Account Setting</Card.Header>
                      <Card.Description>Manage account, change password.</Card.Description>
                    </Card.Content>
                  </Card>
                </Card.Group>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default EnsureAdmin(HomePage);