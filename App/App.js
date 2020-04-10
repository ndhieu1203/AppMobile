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
import ChaoHoi from './src/stackScreen/chaohoi'
import Icon from 'react-native-vector-icons/FontAwesome';


// 
const Stack = createStackNavigator();


const PreNav = ({ navigation }) =>
  <Stack.Navigator initialRouteName="Home"
    //screecoptions:c cùng header header trên nhiều màn hình
    screenOptions={{
      headerStyle: {
        backgroundColor: '#008000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      name="TIẾNG ANH GIAO TIẾP"
      component={HomeScreen}
      options={{
        title: 'Tiếng Anh Giao Tiếp',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <Icon.Button
            name="bars"
            backgroundColor="#008000"
            size={23}
            onPress={() => navigation.openDrawer()}
          >
          </Icon.Button>
        ),
      }}
    />
    <Stack.Screen
      name="List"
      component={List}
      options={{ title: 'Fast sentence' }}
    />

    <Stack.Screen
      name="ChaoHoi"
      component={ChaoHoi}
      options={{ title: 'Chào hỏi' }}
    />
  </Stack.Navigator>

function Img() {
  return (
    <View>
      <Image source={require('./src/image/huanhoahong-1_ugww.jpg')} style={{ width: 400, height: 400 }} />
    </View>
  );
}

const Drawer = createDrawerNavigator();




function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 300,
  }}
      >
        <Drawer.Screen name="Home" component={PreNav} />
        <Drawer.Screen name="Profile" component={ChaoHoi} />
        <Drawer.Screen name="Structs" component={List} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <MyDrawer />
  );
}

export default App;
