import * as React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

export default function HomeScreen({ navigation }) {
    return (
      <ScrollView>
        <View style={Styles.container}>
  
          <View style={Styles.element}>
            <View style={Styles.item}>
              <View style={Styles.itemDich}>
                <Icon.Button
                  onPress={() => navigation.navigate('List')}
                  name = "rocket"
                >Struct
                </Icon.Button>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Text>Icon 3</Text>
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


  const Styles = {
    container: {
        flexDirection: 'row'
    },

    element: {
        flexDirection: 'column',
        flex: 1,
        height: "100%"
    },
    item: {
        width: "100%",
        height: 135,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemDich: {
        width: "40%",
        height: "40%",
        borderRadius: 100,
        backgroundColor: 'green'
    },
    itemConso: {
        width: "40%",
        height: "40%",
        borderRadius: 100,
        backgroundColor: 'red'
    }
};

