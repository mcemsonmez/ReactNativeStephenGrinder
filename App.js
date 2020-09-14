import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import FlatListScreen from "./src/screens/FlatListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreen_Reducer from "./src/screens/SquareScreen_Reducer";
import SquareScreen_Reducer_CommunityConvention from "./src/screens/SquareScreen_Reducer_CommunityConvention";
import CounterScreen_Reducer from "./src/screens/CounterScreen_Reducer";
import TextScreen from "./src/screens/TextScreen";
import TextScreen_Password from "./src/screens/TextScreen_Password";
import BoxScreen from "./src/screens/BoxScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: FlatListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Square2: SquareScreen_Reducer,
    Square3: SquareScreen_Reducer_CommunityConvention,
    Counter2: CounterScreen_Reducer,
    Text: TextScreen,
    Text2: TextScreen_Password,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
