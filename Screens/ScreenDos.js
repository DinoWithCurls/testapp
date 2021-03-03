import React from 'react'
import {View,StyleSheet,StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';


export default function ScreenDos({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#80CBC4" />
            <View style={styles.header}>
                <Animatable.Text style={styles.text_head} animation="zoomIn">Drawer_Screen2</Animatable.Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#80CBC4' },
    text_head: { color: 'black', fontWeight: 'bold', fontSize: 30, marginLeft: 100 },
    header: { flex: 1, justifyContent: 'space-evenly', paddingBottom: 50 },
});
