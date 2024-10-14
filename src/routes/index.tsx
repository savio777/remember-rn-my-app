import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';

import Main from '../screens/Main';
import History from '../screens/History';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function Routes() {
  const theme = useTheme();

  const renderItem = (
    focused: boolean,
    nameIcon: 'format-list-bulleted' | 'history' | 'cog-outline',
  ) => (
    <Icon
      name={nameIcon}
      size={22}
      color={focused ? theme.colors.gray.blue : theme.colors.white}
    />
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colors.black,
            height: 64,
          },
          tabBarLabelStyle: {height: 0},
        }}>
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            title: '',
            tabBarIcon: ({focused}) =>
              renderItem(focused, 'format-list-bulleted'),
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            title: '',
            tabBarIcon: ({focused}) => renderItem(focused, 'history'),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            title: '',
            tabBarIcon: ({focused}) => renderItem(focused, 'cog-outline'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
