import * as React from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';


export default function List(){
    return(
    <View style={styles.container}>

    <ScrollView>
        <FlatList
            data={[
            {key: 'Hello, what is your name?'},
            {key: 'Goodnight, sweet dream !'},
            {key: 'Good afternoon, wanna a game'},
            {key: 'Good Morning'},
            {key: 'Wellcome to my house'},
            {key: 'Tilte, this is party'},
            {key: 'Home, i am comming '},
            {key: 'Screen'},
            {key: 'Stack'},
            {key: 'List'},
            {key: 'Hello'},
            {key: 'Goodnight'},
            {key: 'Good afternoon'},
            {key: 'Good Morning'},
            {key: 'Wellcome'},
            {key: 'Tilte'},
            {key: 'Home'},
            {key: 'Screen'},
            {key: 'Stack'},
            {key: 'List'},
            ]}
          renderItem={({item}) => <View style={styles.item}>
                                    <Text style={styles.wordSize}> {item.key}</Text>
                                </View>}
        /> 
    </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: 3,
        backgroundColor: '#dcdcdc'
    }, 

    wordSize: {
        fontSize: 20
    },

    item: {
        padding: 10,
        margin: 3,
        backgroundColor: '#f0fff0',
        borderRadius: 4
    }
});


    