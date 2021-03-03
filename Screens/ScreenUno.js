import React from 'react'
import {View,StyleSheet,StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function ScreenUno({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FF8A80" />
            <View style={styles.header}>
                <Animatable.Text style={styles.text_head} animation="zoomIn">Drawer_Screen1</Animatable.Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FF8A80' },
    text_head: { color: 'black', fontWeight: 'bold', fontSize: 30, marginLeft: 100 },
    header: { flex: 1, justifyContent: 'space-evenly', paddingBottom: 50 },
});