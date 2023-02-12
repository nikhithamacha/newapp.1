import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import hs from "./src/screens/hs";

const navigator = createStackNavigator(
  {
    Home: hs,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "New App no.1",
    },
  }
);

export default createAppContainer(navigator);
