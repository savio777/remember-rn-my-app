import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Main from '../screens/Main';
import History from '../screens/History';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function Routes() {
  const renderItem = (
    nameIcon: 'format-list-bulleted' | 'history' | 'cog-outline',
  ) => <Icon name={nameIcon} size={22} />;

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            title: '',
            tabBarIcon: () => renderItem('format-list-bulleted'),
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            title: '',
            tabBarIcon: () => renderItem('history'),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            title: '',
            tabBarIcon: () => renderItem('cog-outline'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
