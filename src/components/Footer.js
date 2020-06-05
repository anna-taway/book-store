import React from "react";
import {
  Container,
  Icon,
  Divider,
  Image,
  Grid,
  Header,
  Segment,
  List,
} from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
    >
      <Container textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About us" />
            <List link inverted>
              <List.Item as="a">Marketplace conditions</List.Item>
              <List.Item as="a">General conditions</List.Item>
              <List.Item as="a">Cookies</List.Item>
              <List.Item as="a">Legal</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About Pine" />
            <List link inverted>
              <List.Item as="a">Who are we ?</List.Item>
              <List.Item as="a">Careers</List.Item>
              <List.Item as="a">Our values</List.Item>
              <List.Item as="a">Group Pine</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item as="a">Need help ?</List.Item>
              <List.Item as="a">Gift cards Pine</List.Item>
              <List.Item as="a">Pay&Go</List.Item>
              <List.Item as="a">Unidays</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as="h4" content="Upcoming events" />
            <p>Please visit about our upcoming events on our social networks</p>
            <Icon name="facebook" />
            <Icon name="twitter" />
            <Icon name="youtube" />
            <Icon name="instagram" />
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Image centered size="mini" src="./award.png" />
        <List horizontal inverted divided link size="small">
          <List.Item as="a" href="#">
            Pine Book Store
          </List.Item>
          <List.Item as="a" href="#">
            Contact Us
          </List.Item>
          <List.Item as="a" href="#">
            Terms and Conditions
          </List.Item>
          <List.Item as="a" href="#">
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default Footer;
