import * as React from 'react';
import { Button, View, Text, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Styles } from './src/common';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import List from './src/stackScreen/flatList'
import HomeScreen from './src/stackScreen/homescreen'
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

// 
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const PreNav = ({ navigation }) =>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="TIẾNG ANH GIAO TIẾP"
      component={HomeScreen}
      options={{
        title: 'Tiếng Anh Giao Tiếp',
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          // <Button
          //   onPress={() => navigation.openDrawer()}
          //   title="menu"
          //   color="#008000"
          // />
          <Icon.Button
            name="bars"
            backgroundColor="#008000"
            size ={23}
            onPress={() => navigation.openDrawer()}
          >
          </Icon.Button>
        ),
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#008000"
          />
        )
      }}
    />
    <Stack.Screen
      name="List"
      component={List}
      options={{ title: 'Fast sentence' }}
    />
  </Stack.Navigator>

function Img(){
  return (
    <View>
      <Image source={require('./src/image/huanhoahong-1_ugww.jpg')} style={{width: 400, height: 400}} />
    </View>
  );
}

function App() {
  return (

    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={PreNav}  />
        <Drawer.Screen name="Profile" component={Img} />
        <Drawer.Screen name="Structs" component={List} />
        
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

export default App;
