import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Phonenumber from "./Phonenumber";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Phonenumber" component={Phonenumber} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
