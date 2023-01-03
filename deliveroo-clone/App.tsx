import { styles } from './Style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/HomeComponents/Home';
import Restaurant from './screens/RestaurantComponents/Restaurant';
import { Provider } from 'react-redux';
import { store } from './store';
import Basket from './screens/BasketComponents/Basket';
import PreparingOrder from './screens/preparingOrder/PreparingOrder';
import DeliveryScreen from './screens/Delivery/DeliveryScreen';
import ThankYou from './screens/ThankYouComponent/ThankYou';
import OrderPlaced from './screens/OrderPlaced/OrderPlaced';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name='BasketScreen' options={{
            presentation: 'modal',
            headerShown: false
          }} component={Basket} />
          <Stack.Screen options={{
            presentation: "fullScreenModal",
            headerShown: false
          }} name='PreparingOrder' component={PreparingOrder} />
          <Stack.Screen name='Delivery' options={{
            presentation: 'modal',
            headerShown: false
          }} component={DeliveryScreen} />
          <Stack.Screen name='ThankYou' options={{
            presentation: 'modal',
            headerShown: false
          }} component={ThankYou} />
          <Stack.Screen name='orderPlaced' options={{
            presentation: 'modal',
            headerShown: false
          }} component={OrderPlaced} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


