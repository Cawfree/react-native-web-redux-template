import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import LandingContainer from './../landing/containers/LandingContainer';

//import {
//  Row,
//  Col,
//  Card,
//  CardText,
//  CardBody,
//  CardHeader,
//  ListGroup,
//  ListGroupItem,
//} from 'reactstrap';

const Index = () => (
  <Switch
    hideNavBar
  >
    <Route
      exact
      path="/"
      render={nextProps => (
        <LandingContainer
        />
      )}
    />
  </Switch>
);

//const Index = () => (
//  <Switch>
//    <Route
//      exact
//      path="/"
//      render={props => (
//        <TemplateSidebar>
//          <Home {...props} />
//        </TemplateSidebar>
//      )}
//    />
//    <Route
//      path="/sign-up"
//      render={props => (
//        <TemplateNothing pageTitle="Sign Up">
//          <SignUpContainer {...props} Layout={SignUpComponent} />
//        </TemplateNothing>
//      )}
//    />
//    <Route
//      path="/login"
//      render={props => (
//        <TemplateNothing pageTitle="Login">
//          <LoginContainer {...props} Layout={LoginComponent} />
//        </TemplateNothing>
//      )}
//    />
//    <Route
//      path="/forgot-password"
//      render={props => (
//        <TemplateNothing pageTitle="Forgot Password">
//          <ForgotPasswordContainer {...props} Layout={ForgotPasswordComponent} />
//        </TemplateNothing>
//      )}
//    />
//    <Route
//      path="/update-profile"
//      render={props => (
//        <TemplateSidebar pageTitle="Update Profile">
//          <UpdateProfileContainer {...props} Layout={UpdateProfileComponent} />
//        </TemplateSidebar>
//      )}
//    />
//    <Route
//      path="/recipes"
//      render={props => (
//        <TemplateSidebar pageTitle="Recipes">
//          <RecipesContainer {...props} Layout={RecipeListingComponent} />
//        </TemplateSidebar>
//      )}
//    />
//    <Route
//      path="/recipe/:id"
//      render={props => (
//        <TemplateSidebar pageTitle="Recipe View">
//          <RecipesContainer {...props} Layout={RecipeSingleComponent} />
//        </TemplateSidebar>
//      )}
//    />
//    <Route
//      render={props => (
//        <TemplateSidebar pageTitle="404 - Page not found">
//          <Error {...props} title="404" content="Sorry, the route you requested does not exist" />
//        </TemplateSidebar>
//      )}
//    />
//  </Switch>
//);

export default Index;
