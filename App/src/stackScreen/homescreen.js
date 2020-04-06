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
import { BorderlessButton } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
    return (
      <ScrollView>
        <View style={Styles.container}>
  
          <View style={Styles.element}>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon.Button
                  onPress={() => navigation.navigate('List')}
                  name = "search"
                  color = "lightsteelblue"
                  iconStyle = {{marginLeft: 13 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                >
                </Icon.Button>
                <Text style={Styles.buttonName}>Tìm kiếm</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
                <Icon.Button
                  name = "handshake-o"
                  color = "black"
                  iconStyle = {{marginLeft: 9 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                ></Icon.Button>
                <Text style={Styles.buttonName}>Chào hỏi</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
              <Icon.Button
                  name = "map"
                  color = "darkkhaki"
                  iconStyle = {{marginLeft: 20 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                ></Icon.Button>
                <Text style={Styles.buttonName}>Địa phương</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
              <Icon.Button
                  name = "calendar"
                  color = "chocolate"
                  iconStyle = {{marginLeft: 20 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                ></Icon.Button>
                <Text style={Styles.buttonName}>Thời gian</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
              <Icon.Button
                  onPress={() => navigation.navigate('List')}
                  name = "car"
                  color = "gold"
                  iconStyle = {{marginLeft: 12 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                >
                </Icon.Button>
                <Text style={Styles.buttonName}>Xe cộ</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
              <Icon.Button
                  onPress={() => navigation.navigate('List')}
                  name = "wechat"
                  color = "dodgerblue"
                  iconStyle = {{marginLeft: 11 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                >
                </Icon.Button>
                <Text style={Styles.buttonName}>Trò Chuyện</Text>
              </View>
            </View>
          </View>
  
          <View style={Styles.element}>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
              <Icon.Button
                  onPress={() => navigation.navigate('List')}
                  name = "home"
                  color = "firebrick"
                  iconStyle = {{marginLeft: 20 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                >
                </Icon.Button>
                <Text style={Styles.buttonName}>Nhà cửa</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
              <Icon.Button
                  onPress={() => navigation.navigate('List')}
                  name = "gamepad"
                  color = "midnightblue"
                  iconStyle = {{marginLeft: 20 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                >
                </Icon.Button>
                <Text style={Styles.buttonName}>Giải trí</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
              <Icon.Button
                  onPress={() => navigation.navigate('List')}
                  name = "train"
                  color = "red"
                  iconStyle = {{marginLeft: 20 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                >
                </Icon.Button>
                <Text style={Styles.buttonName}>Giao Thông</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
              <Icon.Button
                  onPress={() => navigation.navigate('List')}
                  name = "smile-o"
                  color = "goldenrod"
                  iconStyle = {{marginLeft: 20 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                >
                </Icon.Button>
                <Text style={Styles.buttonName}>Cảm xúc</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
              <Icon.Button
                  onPress={() => navigation.navigate('List')}
                  name = "music"
                  color = "purple"
                  iconStyle = {{marginLeft: 20 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                >
                </Icon.Button>
                <Text style={Styles.buttonName}>Âm nhạc</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
              <Icon.Button
                  onPress={() => navigation.navigate('List')}
                  name = "film"
                  color = "indigo"
                  iconStyle = {{marginLeft: 20 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                >
                </Icon.Button>
                <Text style={Styles.buttonName}>Phim</Text>
              </View>
            </View>
          </View>
  
          <View style={Styles.element}>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
              <Icon.Button
                  onPress={() => navigation.navigate('List')}
                  name = "book"
                  color = "skyblue"
                  iconStyle = {{marginLeft: 20 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                >
                </Icon.Button>
                <Text style={Styles.buttonName}>Sách</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
              <Icon.Button
                  onPress={() => navigation.navigate('List')}
                  name = "map-marker"
                  color = "maroon"
                  iconStyle = {{marginLeft: 25 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                >
                </Icon.Button>
                <Text style={Styles.buttonName}>Vị Trí</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
              <Icon.Button
                  onPress={() => navigation.navigate('List')}
                  name = "apple"
                  color = "tomato"
                  iconStyle = {{marginLeft: 20 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                >
                </Icon.Button>
                <Text style={Styles.buttonName}>Hoa quả</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
              <Icon.Button
                  onPress={() => navigation.navigate('List')}
                  name = "dribbble"
                  color = "orange"
                  iconStyle = {{marginLeft: 20 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                >
                </Icon.Button>
                <Text style={Styles.buttonName}>Thể thao</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
              <Icon.Button
                  onPress={() => navigation.navigate('List')}
                  name = "tree"
                  color = "green"
                  iconStyle = {{marginLeft: 20 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                >
                </Icon.Button>
                <Text style={Styles.buttonName}>Cây cối</Text>
              </View>
            </View>
            <View style={Styles.item}>
              <View style={Styles.itemConso}>
              <Icon.Button
                  onPress={() => navigation.navigate('List')}
                  name = "paw"
                  color = "brown"
                  iconStyle = {{marginLeft: 20 }}
                  backgroundColor = "white"
                  size = {45}
                  borderRadius = {100}
                >
                </Icon.Button>
                <Text style={Styles.buttonName}>Động Vật</Text>  
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

    itemConso: {
        width: "70%",
        height: "70%",
        borderRadius: 0,
        backgroundColor: 'white',
    },

    buttonName: {
      fontSize: 17,
      textAlign: "center"
    }
};

