import React from 'react';
import { Switch, Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DashboardContainer from './../dashboard/containers/DashboardContainer';

//{...DefaultProps.tabProps}

// Scene>
//      {...DefaultProps.navbarProps}
//      component={RecipesContainer}
//
//<Scene hideNavBar>
//      <Tabs
//        key="tabbar"
//        swipeEnabled
//        type="replace"
//        showLabel={false}
//      >
//      </Tabs>
//    </Scene>
//    <Scene
//      back
//      clone
//      key="recipe"
//      title="RECIPE"
//    />

const Index = (
  <Switch
    hideNavBar
  >
    <Scene
      hideNavBar
      component={DashboardContainer}
      render={nextProps => (
        <DashboardContainer
          {...nextProps}
        />
      )}
    />
  </Switch>
);


//const Index = (
//  <Stack hideNavBar>
//    <Scene hideNavBar>
//      <Tabs
//        key="tabbar"
//        swipeEnabled
//        type="replace"
//        showLabel={false}
//        {...DefaultProps.tabProps}
//      >
//        <Stack
//          key="home"
//          title={AppConfig.appName.toUpperCase()}
//          icon={() => <Icon name="planet" {...DefaultProps.icons} />}
//          {...DefaultProps.navbarProps}
//        >
//          <Scene key="home" component={AboutComponent} />
//        </Stack>
//
//        <Stack
//          key="recipes"
//          title="RECIPES"
//          icon={() => <Icon name="book" {...DefaultProps.icons} />}
//          {...DefaultProps.navbarProps}
//        >
//          <Scene key="recipes" component={RecipesContainer} Layout={RecipeListingComponent} />
//        </Stack>
//
//        <Stack
//          key="profile"
//          title="PROFILE"
//          icon={() => <Icon name="contact" {...DefaultProps.icons} />}
//          {...DefaultProps.navbarProps}
//        >
//          <Scene key="profileHome" component={MemberContainer} Layout={ProfileComponent} />
//          <Scene
//            back
//            key="signUp"
//            title="SIGN UP"
//            {...DefaultProps.navbarProps}
//            component={SignUpContainer}
//            Layout={SignUpComponent}
//          />
//          <Scene
//            back
//            key="login"
//            title="LOGIN"
//            {...DefaultProps.navbarProps}
//            component={LoginContainer}
//            Layout={LoginComponent}
//          />
//          <Scene
//            back
//            key="forgotPassword"
//            title="FORGOT PASSWORD"
//            {...DefaultProps.navbarProps}
//            component={ForgotPasswordContainer}
//            Layout={ForgotPasswordComponent}
//          />
//          <Scene
//            back
//            key="updateProfile"
//            title="UPDATE PROFILE"
//            {...DefaultProps.navbarProps}
//            component={UpdateProfileContainer}
//            Layout={UpdateProfileComponent}
//          />
//        </Stack>
//      </Tabs>
//    </Scene>
//
//    <Scene
//      back
//      clone
//      key="recipe"
//      title="RECIPE"
//      {...DefaultProps.navbarProps}
//      component={RecipesContainer}
//      Layout={RecipeSingleComponent}
//    />
//  </Stack>
//);

export default Index;
