import * as React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Styles } from './src/common';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={Styles.container}>

        <View style={Styles.element}>
          <View style={Styles.item}>
            <View style={Styles.itemDich}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemConso}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemConso}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemConso}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemConso}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemConso}>

            </View>
          </View>
        </View>

        <View style={Styles.element}>
        <View style={Styles.item}>
            <View style={Styles.itemDich}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemConso}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemConso}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemConso}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemConso}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemConso}>

            </View>
          </View>
        </View>

        <View style={Styles.element}>
        <View style={Styles.item}>
            <View style={Styles.itemDich}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemConso}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemConso}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemConso}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemConso}>

            </View>
          </View>
          <View style={Styles.item}>
            <View style={Styles.itemConso}>

            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
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
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
